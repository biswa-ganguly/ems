import React from 'react'

function Header() {
  return (
    <div className='flex items-center justify-between  '>
        <h1 className='text-2xl font-medium '>Hello <br /><span className='text-3xl font-semibold'>Biswa 👋</span></h1>
        <button className='bg-red-500 px-5 py-2 font-medium text-lg rounded-lg'>Log Out</button>
    </div>
  )
}

export default Header