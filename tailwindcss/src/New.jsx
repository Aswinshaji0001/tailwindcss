import React from 'react'
import img from '../public/logo.svg'

const New = () => {
  return (
    <div className='w-screen h-8 bg-slate-200'>
      <div className='text-center' style={{ backgroundImage: `url(${img})`}}>
                <h1>SNAP.COM</h1>
      </div>
    </div>
  )
}

export default New
