import React from 'react'
import Link from 'next/link'
import OtterFitLogo from "../../public/next.svg"
import { getServerSession } from 'next-auth'
import {options} from "../api/auth/[...nextauth]/options"
import { redirect } from 'next/navigation'
import styles from "./PublicNav.module.css"
import LogoBtn from './LogoBtn'

const PublicNav = async () => {

    const session = await getServerSession(options)
    
  return (
    <>
        <div className='navbar bg-base-300 rounded-lg'>
            <div className='flex-1'>
                <div className='avatar placeholder'>
                    <div className='w-16 rounded-full'>
                        <span className='text-3xl'>O</span>
                    </div>
                </div>
                <LogoBtn />
            </div>
            <div className='flex-none'>
                <ul className='menu menu-horizontal px-1'>
                    <li className={styles.linkDec}><Link href="/CreateUser">Create User</Link></li>
                    <li className={styles.linkDec}><Link href="/Member">Member</Link></li>
                    <li className={styles.linkDec}>
                    {session ? (
                    <Link href={"/api/auth/signout?callbackUrl=/"}>Logout</Link>) 
                    : (<Link href={"/api/auth/signin"}>Login</Link>)
                    }
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default PublicNav