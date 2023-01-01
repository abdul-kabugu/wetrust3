import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import {useNavigate} from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';
export default function TopNav() {
   const navigate = useNavigate()

    const handleCreateBusinessPage = () =>  {
      navigate("/discover")
    }
  return (
    <div className=' max-w-[1200px]   mx-auto  mb-[30px] w-[100%] top-0 '>
       <div className='h-[60px] px-2 py-2 flex justify-between items-center'>
        <div>
            <img   src='/img/peruzi.png' alt='logo' className='w-10 h-10' />
        </div>
          <div className='flex items-center gap-6'>
             <ul className='flex gap-4 '>
                  <AnchorLink href='#usecase'>
                <li className='cursor-pointer font-semibold text-lg '>Use cases</li>
                </AnchorLink>
                <AnchorLink href='#blog'>
                <li className='cursor-pointer font-semibold text-lg'>Blog</li>
                </AnchorLink>
                <AnchorLink href='#categories'>
                <li className='cursor-pointer font-semibold text-lg'>Categories</li>
                </AnchorLink>
             </ul>
             
             
              <button className='bg-blue-700 text-white font-semibold py-2 px-6 rounded-md'>Log-in</button>
              <div className='flex items-center gap-3 border border-blue-800 py-2 px-4 rounded-lg cursor-pointer' onClick ={handleCreateBusinessPage}>
              <button className='font-semibold  px-6 rounded-md'>Add your business</button>
               <BsArrowRight   />
              </div>
          </div>
       </div>
    </div>
  )
}
