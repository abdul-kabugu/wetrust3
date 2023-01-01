import React from 'react'
import Sidebar from './Sidebar'

export default function Profile() {
  return (
    <div className='flex gap-3'>
         <Sidebar  />
         <div>
        <h1>I'm profile page</h1>
        </div>
    </div>
  )
}
