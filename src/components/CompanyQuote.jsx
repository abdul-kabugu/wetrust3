import React from 'react'

export default function CompanyQuote() {
  return (
    <div className='flex items-center justify-center w-[100%] h-[90vh] relative' id='blog'>
        <div className='w-[70%] h-[65vh] flex flex-col items-center justify-center bg-[url("https://uploads-ssl.webflow.com/6318d0c3b76b6d0535ef7fa9/6318d0c3b76b6d1ffaef7fd2_start-engaging.png")] rounded-lg text-white'>
           <h1 className='font-bold text-white text-4xl mb-2'>Be heard</h1>
            <p className='font-semibold text-lg text-center'>Trustpilot is a review platform that’s open to everyone. <br /> Share your experiences to help others make better <br /> choices and encourage companies to up their game.</p>
              <button className='text-blue-900 bg-white py-3 px-6 mt-4 rounded-lg font-semibold'>Explore  companies</button>
        </div>

        <div className='absolute top-0 left-0 w-[500px] max-w-[100%] h-[600px] bg-[url("https://uploads-ssl.webflow.com/6304e32721135c2ec1fc6d98/631794282ad340322fde3b22_join-us-top.png")]  -z-10'>
            
            </div>
    </div>
  )
}
