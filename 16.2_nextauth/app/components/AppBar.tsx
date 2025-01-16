"use client"

import {signIn, signOut, useSession} from "next-auth/react"

export default function AppBar() {
  const session= useSession()
  return (
    <div>
      <button onClick={()=>{
        signIn()
    }} className="block">
      Signin
    </button>

    <button onClick={()=>{
        signOut()
    }} className="block">
      Logout
    </button>

    <div>{JSON.stringify(session)}</div> 
    <div>{JSON.stringify(session?.data?.user)}</div>
    </div>
  )
}
