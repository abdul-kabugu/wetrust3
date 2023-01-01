import {useRef} from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import {RiImageAddLine} from 'react-icons/ri'
import { useDisplayImage } from '../Hooks';

export default function AddBusinessStep2({
    shortTagline, setshortTagline, companyDescription, aboutCompany,
    setaboutCompany, companyProfile,  setcompanyProfile, setcompanyDescription
}) {

    const imgRef = useRef(null)
     const {result, uploader} = useDisplayImage()
    const handleIOpenSelect = () => {
        imgRef.current.click()
    }
  return (
    <div className='w-[100%]   mt-4 p-4'>
        <p className='text-2xl font-semibold'>Company Profile</p>

         <div className='mt-5'>
            <div className='flex flex-col gap-2'>
                <p className='text-lg font-semibold'>Short tagline</p>
                <input  type="text" value={shortTagline} onChange = {e => setshortTagline(e.target.value)}
                placeholder="Short tagline" max={100} className="w-[100%] h-9 py-2 px-4 focus:outline-none border border-purple-200 rounded-lg"
                />
            </div>

            <div className='flex flex-col gap-2 mt-3'>
                <p className='text-lg font-semibold'>Description</p>
                <TextareaAutosize minRows={5} type="text" value={companyDescription} onChange = {e => setcompanyDescription(e.target.value)}
                placeholder="Short description" max={100} className="w-[100%] h-9 py-2 px-4 focus:outline-none border border-purple-200 rounded-lg resize-none"
                />
            </div>

            <div className='flex flex-col gap-2 mt-3'>
                <p className='text-lg font-semibold'>About</p>
                <TextareaAutosize minRows={5} type="text" value={aboutCompany} onChange = {e => setaboutCompany(e.target.value)}
                placeholder="About your company" max={100} className="w-[100%] h-9 py-2 px-4 focus:outline-none border border-purple-200 rounded-lg resize-none"
                />
            </div>

            <div className='flex flex-col gap-2 mt-3'>
                <p className='text-lg font-semibold'>Profile</p>
                <div className='w-[100%] h-[200px] border-2 border-dashed border-purple-400 rounded-lg flex items-center justify-center gap-3 cursor-pointer' onClick={handleIOpenSelect}>
                     {result ? <img  src={result} alt="company profile"
                      className='max-h-[180px] w-[95%] object-cover rounded-lg'
                     /> :
                        <>
                    <RiImageAddLine className='w-7 h-7' />
                     <p className='font-semibold text-lg'>Add company Profile</p>
                      <input type="file"  onChange={e => {
                        uploader(e)
                        setcompanyProfile(e.target.files[0])
                    }} 
                        accept="image/*" ref={imgRef} hidden
                      />
                      </>
                }
                </div>
            </div>
         </div>
    </div>
  )
}
