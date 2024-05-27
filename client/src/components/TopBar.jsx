import React from 'react'
import "../index.css"
import { CircleUserRound } from 'lucide-react'

const TopBar = ({title, username = "Marwan Sulong"}) => {
  return (
    <div className='w-full h-[8%] bg-white flex justify-between text-black text-lg px-4 py-4'>
        <h1>{title}</h1>
        <div className='flex gap-2 justify-center'>
            <CircleUserRound />
            <p>{username}</p>
        </div>
    </div>
  )
}

export default TopBar