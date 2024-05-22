import React from 'react'
import PublicNav from '../(components)/PublicNav'
import { getServerSession } from 'next-auth'
import { redirect } from "next/navigation"
import { options } from "../api/auth/[...nextauth]/options"

const UserHome = async() => {

  const session = await getServerSession(options)

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/UserHome")
  }

  return (
    <>
        <PublicNav />
    </>
  )
}

export default UserHome