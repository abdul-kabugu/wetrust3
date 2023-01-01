import {useState, useContext, useEffect} from 'react'
import OrbisContext from '../context/OrbisProvider'
import AddBusinessStep1 from './AddBusinessStep1'
import AddBusinessStep2 from './AddBusinessStep2'
import AddBusinessStep3 from './AddBusinessStep3'
import Sidebar from './Sidebar'
import {Orbis} from '@orbisclub/orbis-sdk'
import {MORALIS} from '../assests/constants'
import {EvmChain} from '@moralisweb3/common-evm-utils'
import Moralis from 'moralis'
import { useSelector } from 'react-redux'
export default function CreatePage() {
  const [currentStep, setcurrentStep] = useState(0)
  const [websiteUrl, setwebsiteUrl] = useState("")
  const [companyName, setcompanyName] = useState("")
   const [jobTitle, setjobTitle] = useState("")
   const [address, setAddress] = useState("")
   const [email, setemail] = useState("")
   const [phoneNumber, setphoneNumber] = useState("")
   const [shortTagline, setshortTagline] = useState("")
   const [companyDescription, setcompanyDescription] = useState("")
   const [aboutCompany, setaboutCompany] = useState("")
   const [companyCategories, setcompanyCategories] = useState([])
   const [companyProfile, setcompanyProfile] = useState([])
   const [allowedAddresses, setallowedAddresses] = useState()
   const [nftContractAddress, setnftContractAddress] = useState("")
   const [NFTchain, setNFTchain] = useState("")
   const [connectedUser, setconnectedUser] = useState()

    // const {user, isAuthenticated} = useSelector(state => state.user)
    const {user, isAuthenticated, orbis} = useSelector(state => state.user)
      console.log("user from creator page", companyCategories)
   const getCurrentStep = () =>  {
    if(currentStep === 0) {
      return(
        <AddBusinessStep1 websiteUrl = {websiteUrl} setwebsiteUrl ={setwebsiteUrl} 
          jobTitle = {jobTitle} setjobTitle = {setjobTitle} companyName = {companyName}
          setcompanyName = {setcompanyName} address = {address} setAddress = {setAddress}
          email = {email} setemail = {setemail} phoneNumber = {phoneNumber} setphoneNumber
        />
      )
    }else if(currentStep === 1){
      return(
        <AddBusinessStep2  shortTagline = {shortTagline} setshortTagline = {setshortTagline}
          companyDescription  = {companyDescription} setcompanyDescription = {setcompanyDescription} aboutCompany = {aboutCompany}
           setaboutCompany = {setaboutCompany} companyProfile = {companyProfile} 
           setcompanyProfile = {setcompanyProfile} 
           
        />
      )
    }else if(currentStep === 2){
      return(
        <AddBusinessStep3 
         companyCategories = {companyCategories} setcompanyCategories = {setcompanyCategories}
          allowedAddresses = {allowedAddresses} setallowedAddresses = {setallowedAddresses}
          nftContractAddress = {nftContractAddress} setnftContractAddress = {setnftContractAddress}
          NFTchain = {NFTchain} setNFTchain = {setNFTchain}
        />
      )
    }
   }
  const context = useContext(OrbisContext)
  console.log("the context", context)
     const handleNextStep  = () =>  {
      if(currentStep < 3 -1){
        setcurrentStep(currentStep +1)
      }
     }

     const handlePrevStep  = () =>  {
      if(currentStep > 0){
        setcurrentStep(currentStep -1)
      }
     }
 
    const startMoralis = async () => {
       await Moralis.start({
      apiKey: MORALIS,
      // ...and any other configuration
  })
 }
 


        
     const handleGetNFTHolders =  async () =>  {
        try {
          const chain = EvmChain.ETHEREUM;

          const address = '0x1234567890123456789012345678901234567890';
          if (!Moralis.Core.isStarted){
            await Moralis.start({ apiKey: MORALIS })
            }
          
          const response = await Moralis.EvmApi.nft.getNFTOwners({
             address ,
             chain
          });
      
          console.log(response?.result);
      } catch (e) {
          console.error(e);
      }
              
      }

     const handleAddBusiness = async () =>  {
      let cover = await orbis.uploadMedia(companyProfile);
      let res = await orbis.createPost({
        body : companyDescription,
        media : [cover.result],
        context : "wetrust3",
        tags : companyCategories,
        data : {
          websiteUrl : websiteUrl,
          companyName : companyName,
          jobTitle : jobTitle,
          address : address,
          companyEmail : email,
          phoneNumber : phoneNumber,
          shortTagline : shortTagline,
          aboutCompany : aboutCompany,
          census : nftContractAddress,
        }


      });

     }
      
  return (
    <div className='flex gap-4 '>
        <Sidebar   />
        <div className='py-4 w-[100%]  overflow-y-scroll hide-scrollbar h-screen'>
            <h1 className='text-4xl font-bold'>Start collecting reviews today</h1>
             <div>
              {getCurrentStep()}
               
                <div className='w-[90%] flex justify-between mx-auto mt-3'>
                  <button onClick={handlePrevStep} className="py-2 px-6 bg-blue-700 text-white font-semibold rounded-lg">Prev Step</button>
                  {currentStep  === 2 ?
                    <button onClick={handleGetNFTHolders}  className="py-2 px-6 bg-blue-700 text-white font-semibold rounded-lg" >Submit</button>:
                  <button onClick={handleNextStep}  className="py-2 px-6 bg-blue-700 text-white font-semibold rounded-lg">Next Step</button>
                  }
                </div>
             </div>
        </div>
    </div>
  )
}
