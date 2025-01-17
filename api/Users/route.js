import {NextResponse} from "next/server"
import User from "../../(models)/User"
import bcrypt from "bcrypt";

/*
Lowercase all usernames so that we can consistently 
search for them and find duplicates of the same username/email
*/

export async function POST(req) {
    try{
        const body = await req.json()
        const userData = body.formData

        //Confirm data exists
        if (!userData.email || !userData.password || userData.email == "" || userData.password == "") {
            return NextResponse.json({message: "All Fields are required."}, {status: 400});
        }

        //Check for duplicate emails/users
        const duplicate = await User.findOne({email: userData.email}).lean().exec();

        if (duplicate) {
            return NextResponse.json({message: "Duplicate Email"}, {status: 409})
        }

        const hashPassword = await bcrypt.hash(userData.password, 12)
        userData.password = hashPassword;
        await User.create(userData)
        return NextResponse.json({message: "User Created" }, {status: 201})

    } catch (error) {
        console.log(err)
        return NextResponse.json({message: "Error", err}, {status: 500})
    }
}