import React from 'react'
import userProfile from "../assets/user-profile.svg";

function UserProfile() {
  return (
    <div>
    <img className="w-6" src={userProfile} alt="user" />
  </div>
  )
}

export default UserProfile