import React from 'react'
import Sidebar from '../components/Sidebar'
import {Route, Routes} from 'react-router-dom'
export default function Dashboard() {
  return (
    <div className='flex gap-3'>
        <Sidebar  />
         <div>
          <h1>I'm main page</h1>
           
         </div>
    </div>
  )
}
