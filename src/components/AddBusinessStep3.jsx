import {useState} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
export default function AddBusinessStep3({companyCategories, setcompanyCategories, allowedAddresses, 
    setallowedAddresses,   nftContractAddress, setnftContractAddress, NFTchain,setNFTchain
}) {
    const [categoryTxt, setcategoryTxt] = useState("")
    
   // ADD TAG
    const  addNewTag  = (event) =>  {
        if(event.key === 'Enter' && categoryTxt && companyCategories.length < 5){
        setcompanyCategories([...companyCategories, {slug : categoryTxt, title : categoryTxt}])
          setcategoryTxt("")
        }
      }

          //Remove  tag
   const removeTag = (index) => {
    setcompanyCategories([...companyCategories.filter(tags => companyCategories.indexOf(tags) !== index)])
   }

    console.log("categories", companyCategories)
  return (
    <div className='w-[100%]   mt-4 p-4 '>
        <h1 className='font-semibold text-2xl'>Who can Review</h1>

          <div className='mt-5' >
            <div className='flex flex-col gap-2'>
            <p className='font-semibold text-lg'>Business Category</p>
            <div className='w-[100%] h-[70px] border border-purple-200 rounded-lg flex items-center gap-3'>
              <input  value={categoryTxt} onChange = {e => setcategoryTxt(e.target.value)} 
               placeholder="Category name" className='py-2 px-3 focus:outline-none border border-purple-200 rounded-sm'
               onKeyUp={event  => addNewTag(event)}
              />
               <div className='gap-4 flex '>
               {companyCategories?.map((item, i) =>  {
                return(
                    <div key={i} className="flex items-center py-1 px-3 rounded-md text-white gap-2 bg-blue-600">
                        <p>{item.title}</p>
                         <AiOutlineClose className='cursor-pointer' onClick={() => removeTag(i)} />
                    </div>
                )
               })}
            </div>
          </div>
          </div>
          <div className='mt-3'>
            <p className='text-xl font-semibold'>Add census</p>
             <p className='font-semibold text-gray-400'>This is the list  of  users  who  allowed  to review  your  business, <br />
               For now  you  can  only  use  list  of nft holders  will add more methods later
             </p>
             <p className='text-lg font-semibold mt-2'>NFT contract address</p>
             <input  className='w-[100%] h-9 mt-2 focus:outline-none border border-purple-200 py-2 px-4 rounded-lg'  
              placeholder='0xoiug....' value={nftContractAddress} onChange ={e => setnftContractAddress(e.target.value)}
             />
           <p className='text-lg font-semibold mt-2'>Chain</p>
<select  className='w-[100%]  mt-2 focus:outline-none border border-purple-200 py-2 px-4 rounded-lg'  
              placeholder='0xoiug....' value={NFTchain} onChange ={e => setNFTchain(e.target.value)}
             >
              <option value="eth">Ethereum</option>
              <option value="polygon">Polygon</option>
             </select>
          </div>
          </div>
    </div>
  )
}
