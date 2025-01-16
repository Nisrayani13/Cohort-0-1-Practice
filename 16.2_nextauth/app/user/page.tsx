import { getServerSession } from 'next-auth'
import React from 'react'
import { NEXT_AUTH } from '../lib/auth'

export default async function page() {
    const session= await getServerSession(NEXT_AUTH)
  return (
    <div>
      {JSON.stringify(session)}
    </div>
  )
}
