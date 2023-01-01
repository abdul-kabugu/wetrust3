import {useState} from 'react'

export default function AddBusinessStep1({
    websiteUrl, setwebsiteUrl, jobTitle, setjobTitle, companyName, setcompanyName,
    address, setAddress,  email, setemail, phoneNumber, setphoneNumber
}) {
    

  return (
    <div className='w-[100%]   mt-4 p-4'>
        <p className='text-2xl font-semibold'>Add business Information</p>
        
          <div className='mt-5'>
            <div className='flex flex-col gap-2'>
                <p className='font-semibold text-lg'>Website </p>
             <input   type="text" value={websiteUrl} onChange = {e => setwebsiteUrl(e.target.value)} 
              placeholder="www.example.com" className='w-[100%] focus:outline-none border border-purple-200
                h-10 py-3 px-4 rounded-md
              '
             />
            </div>  

            <div className='flex flex-col gap-2 mt-3'>
                <p className='font-semibold text-lg'>company name </p>
             <input   type="text" value={companyName} onChange = {e => setcompanyName(e.target.value)} 
              placeholder="unlock protoco" className='w-[100%] focus:outline-none border border-purple-200
                h-10 py-3 px-4 rounded-md
              '
             />
            </div>

            <div className='flex flex-col gap-2 mt-3'>
                <p className='font-semibold text-lg'>Job title </p>
             <input   type="text" value={jobTitle} onChange = {e => setjobTitle(e.target.value)} 
              placeholder="CEO" className='w-[100%] focus:outline-none border border-purple-200
                h-10 py-3 px-4 rounded-md
              '
             />
            </div>

            <div className='flex flex-col gap-2 mt-3'>
                <p className='font-semibold text-lg'>company address </p>
             <input   type="text" value={address} onChange = {e => setAddress(e.target.value)} 
              placeholder="CA" className='w-[100%] focus:outline-none border border-purple-200
                h-10 py-3 px-4 rounded-md
              '
             />
            </div>

            <div className='flex flex-col gap-2 mt-3'>
                <p className='font-semibold text-lg'>company email </p>
             <input   type="text" value={email} onChange = {e => setemail(e.target.value)} 
              placeholder="unlockprotocol@..com" className='w-[100%] focus:outline-none border border-purple-200
                h-10 py-3 px-4 rounded-md
              '
             />
            </div>

            <div className='flex flex-col gap-2 mt-3'>
                <p className='font-semibold text-lg'>phone number </p>
             <input   type="text" value={phoneNumber} onChange = {e => setphoneNumber(e.target.value)} 
              placeholder="+1-787-098.." className='w-[100%] focus:outline-none border border-purple-200
                h-10 py-3 px-4 rounded-md
              '
             />
            </div>
          </div>
    </div>
  )
}
