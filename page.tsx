import React from 'react'
import PublicNav from './(components)/PublicNav'
import { getServerSession } from 'next-auth'
import {options} from "./api/auth/[...nextauth]/options"
import { redirect } from 'next/navigation'

import UserHome from './UserHome/page'

const Home = async () => {

  const session = await getServerSession(options)

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/UserHome")
  }

  return (
    <div>
      <UserHome />
    </div>
  )
}

export default Home