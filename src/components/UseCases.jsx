import{useRef} from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { useCases } from '../assests/constants'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
export default function UseCases() {
   

     
  return (
    <div className=' w-[90%] h-[80vh] px-4 mt-10 py-3 flex flex-col items-center justify-center gap-36 mx-auto' id='usecase'>
        
            <div className='flex items-center justify-between w-[100%]'>
            <h1 className='text-6xl font-semibold font-sans text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600  '>Use Cases</h1>
             <div className='flex items-center gap-4'>
                <BsArrowLeft className='w-9 h-9 cursor-pointer' />
                 <BsArrowRight className='w-9 h-9 cursor-pointer' />
             </div>
            </div>
       
         <div className='w-[100%]'>
         <Swiper
          spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
             {useCases.map((item, i) => {

                return(
                    <SwiperSlide>
                      <div className='border border-purple-200 flex flex-col items-center justify-center py-3 px-4 rounded-lg'>
                      <item.icon  className='w-11 h-11 text-blue-600 mb-3'  />
                       <h1 className='text-2xl font-semibold my-2 text-center'>{item.name}</h1>
                       <p className='text-lg font-semibold text-center'>{item.description}</p>
                      </div>
                    </SwiperSlide>
                )
             })}
             </Swiper>
         </div>
        
    </div>
  )
}
