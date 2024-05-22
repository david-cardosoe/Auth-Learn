"use client"
import React from 'react'
import { redirect } from "next/navigation"
import next from 'next/navigation'

const LogoBtn = () => {

    const logoClick = () => {
        console.log("User redirected back to home page.");
        redirect("/UserHome");
    }

  return (
    <>
        <a className='btn btn-ghost text-xl' onClick={logoClick}>Otter Fit</a>
    </>
  )
}

export default LogoBtn