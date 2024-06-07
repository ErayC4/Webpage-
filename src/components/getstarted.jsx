import React from 'react'

function GetStarted() {
  return (
    <div className='flex justify-between px-32 pt-32 bg-[#E1EBDC]'>
      <p className='text-9xl'>Get started for free</p>
      <div className='mt-auto'>
        <p className='text-lg'>Try Webflow for as long as you like with our free Starter plan. Purchase a paid Site plan to publish, host, and unlock additional features.</p>
        <button className='bg-violet-500 px-4 py-2 rounded-lg text-white text-xl mt-4'>
          Get Started
        </button>
      </div>
    </div>
  )
}

export default GetStarted