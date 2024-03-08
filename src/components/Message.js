import React from 'react'
import UserProfile from './UserProfile';

function Message({name, text}) {

  return (
    <div className='flex gap-2 p-2 bg-slate-200 rounded-lg my-2 '>
    <UserProfile />
      <div className="">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Message