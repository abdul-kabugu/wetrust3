import {useState} from 'react'
import { categories } from '../assests/constants'

export default function Explore() {
  return (
    <div className='z-10' id='categories'>
        <h1 className='text-3xl font-semibold text-center'>Explore categories</h1>
         <div className='flex flex-wrap w-[90%] mx-auto justify-center gap-4 mt-7'>
          {categories.map((category, i) => {

            return(
              <div className='min-w-[200px] h-[60px] border border-purple-400 flex gap-2 items-center px-3 rounded-lg cursor-pointer hover:shadow-lg '>
                 <category.icon  className='w-7 h-7 text-gray-400'  />
                  <h1 className='text-lg font-semibold'>{category.name}</h1>
              </div>
            )
          })}
         </div>
          
    </div>
  )
}
