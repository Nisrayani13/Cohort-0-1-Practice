"use client"
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function page() {
    const router=useRouter();
  return (
    <div>
      {/* <button onClick={async ()=>{
        await signIn("google")
      }}>Signin with google</button> */}
      <button onClick={async ()=>{
        await signIn("github")
      }}>Signin with github</button>
      <button onClick={async ()=>{
        const response = await signIn("credentials",{
            username:"",
            password:"",
            redirect:false
        })
        console.log(response);
        router.push("/")
      }}>Signin with email</button>
    </div>
  )
}
