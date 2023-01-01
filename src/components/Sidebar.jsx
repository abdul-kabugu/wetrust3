import {useContext} from 'react'
import { SideBarNav } from '../assests/constants'
import {Link} from 'react-router-dom'
import OrbisContext from '../context/OrbisProvider'

export default function Sidebar() {
   const context = useContext(OrbisContext)
    const handleConnctWallet  = async () =>  {
      let res = await context.connect_v2({
        provider: window.ethereum,
        lit: false
      });
    }
  return (
    <div className='w-[300px] h-screen border-r border-r-blue-600 py-4'>
       
          <div className='mb-10'>
              <img src='/img/peruzi.png'  alt='logo' className='w-12 h-12'  />
          </div>
        {SideBarNav.map((item, i) =>  {

            return(
             <div className='flex gap-3 items-center my-5 hover:text-purple-600 cursor-pointer'>
                 <item.icon  className='w-8 h-8 text-gray-500' />
                  <Link to={item.to}> <p className='font-semibold text-lg'>{item.name}</p> </Link>
             </div>
            )
        })}

         <button className='mt-11 py-3 px-10 bg-blue-700 text-white rounded-lg font-semibold' onClick={handleConnctWallet}>Log-In</button>
    </div>
  )
}
