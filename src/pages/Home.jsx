import React from 'react'
import CompanyQuote from '../components/CompanyQuote'
import Explore from '../components/Explore'
import HeroSection from '../components/HeroSection'
import TopNav from '../components/TopNav'
import UseCases from '../components/UseCases'
//[url("https://uploads-ssl.webflow.com/6304e32721135c2ec1fc6d98/631749d6ee1d63693480063f_hero-top.png")]
export default function Home() {
  return (
    <div className=''>
       <TopNav />
        <HeroSection   />
         <Explore  />
           <UseCases   />
           <CompanyQuote  />
         <div className='absolute top-0 right-0 w-[600px] max-w-[100%] h-[800px] bg-[url("https://uploads-ssl.webflow.com/6304e32721135c2ec1fc6d98/631749d6ee1d63693480063f_hero-top.png")]  -z-10'>
            
         </div>
         
         <div className='absolute  left-0 w-[600px] max-w-[100%] h-[800px] -bottom-[150px] bg-[url("https://uploads-ssl.webflow.com/6304e32721135c2ec1fc6d98/631749d6c0bf47804b150f58_hero-bottom.png")] rounded-xl bg-opacity-0  -z-10'>
            
            </div>

            <div className='absolute top-[90vh] right-0 w-[500px] max-w-[100%] h-[800px] bg-[url("https://uploads-ssl.webflow.com/6304e32721135c2ec1fc6d98/631792e5ba74757966baff46_support-top.png")]  -z-10'>
            
            </div>

            

            
           
         
    </div>
  )
  
}
