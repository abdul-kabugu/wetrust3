import{useState} from 'react'

export default function HeroSection() {
    const [searchTxt, setsearchTxt] = useState("")
  return (
    <div className='w-[100%] min-h-[80vh] mt-[70px]  flex flex-col items-center justify-center'>
        <div className='flex flex-col gap-4'>
        <h1 className='text-6xl font-semibold font-sans text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600 '>Read reviews. Write reviews. </h1>
         <h1 className='text-6xl font-semibold font-sans text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600 '>   Find companies you can trust.</h1>
           <p className='text-center mt-4 text-xl font-semibold'>Your audience is increasingly using Web3. <br />
Wetrust3 is a no-code tool to discover, manage & engage them.</p>
         </div>

          <div className='mt-9 w-[100%]'>
           <div className='border border-purple-300  w-[700px] h-[60px] mx-auto rounded-lg flex items-center px-4 justify-between'>
              <input  type='text' value={searchTxt} onChange = { e => setsearchTxt(e.target.value)}   
                placeholder="Search company" className='w-[75%] h-9 py-2 px-3 rounded-lg focus:outline-none border border-gray-200'
              />
              <button className='text-white bg-blue-600 py-2 px-6 font-semibold rounded-lg'>Search</button>
           </div>
          </div>

    </div>
  )
}

