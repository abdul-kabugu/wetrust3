import {FcCurrencyExchange} from 'react-icons/fc'
import {BsBank, BsPlug} from 'react-icons/bs'
import {BiStore, BiGame, BiTrip, BiHomeAlt} from 'react-icons/bi'
import {GiClothes} from 'react-icons/gi'
import {RiExchangeDollarFill} from 'react-icons/ri'
import {VscFeedback, VscAdd} from 'react-icons/vsc'
import {MdOutlineQuickreply, MdOutlineAnalytics, MdOutlineIndeterminateCheckBox,MdOutlineNotificationsActive} from 'react-icons/md'
import {RiServiceLine} from 'react-icons/ri'
import {TfiAnnouncement} from 'react-icons/tfi'
import {HiOutlineDocumentRemove} from 'react-icons/hi'
import {AiOutlineUser} from 'react-icons/ai'
export const categories = [
     {
        name : "Crypto exchanges",
        icon : RiExchangeDollarFill,
        to : "/exchanges"
     },

     {
        name : "Banks",
        icon : BsBank,
        to : "/banks"
     },

     {
        name : "Stores",
        icon : BiStore,
        to : '/stores'
     },


     {
        name : "Games",
        icon : BiGame,
     },

     {
        name : "Travel agency",
        icon : BiTrip,
     },
     {
        name : "Men's clothing store",
        icon : GiClothes,
     },
     {
        name : "Electronics Store",
        icon : BsPlug,
     },
     {
        name : "Real estate Agents",
        icon : BiHomeAlt,
     }

]

export const useCases = [
   {
     name : "Consumer feedback and reviews",
      description : 'Wetrust3 allow consumers to share their experiences with a business, product, or service, which can help other consumers make informed purchasing decisions.',
      icon : VscFeedback,
   },

   {
      name : "Reputation management",
       description : 'Businesses can use Wetrust3 to manage and improve their online reputation by responding to customer reviews and addressing any issues that may be raised.',
       icon : MdOutlineQuickreply,
    },

    {
      name : "Product or service improvement",
       description : 'By analyzing customer feedback and reviews, businesses can identify areas for improvement and make changes to their products or services to better meet the needs of their customers',
       icon : RiServiceLine,
    },

    {
      name : "Marketing and advertising",
       description : 'Wetrust3 can be a valuable tool for businesses to showcase positive customer reviews and ratings, which can help attract new customers and build trust.',
       icon : TfiAnnouncement,
    },

    {
      name : "Industry insights",
       description : 'Wetrust3 can provide valuable insights into industry trends and customer preferences, which can be useful for businesses looking to stay competitive.',
       icon : MdOutlineAnalytics,
    },

    {
      name : "Fraud detection",
       description : 'Wetrust3 can help identify and prevent fraudulent activity by allowing users to flag suspicious reviews.',
       icon : MdOutlineIndeterminateCheckBox,
    },
]

export const SideBarNav = [
   {
      name : "Discover",
      icon : BiHomeAlt,
      to : "/discover",
   },
    {
       name : "Create",
       icon : VscAdd,
       to : "/create",
    },

    {
      name : "Embed code",
      icon : HiOutlineDocumentRemove,
      to : "/integration",
   },

   {
      name : "Profile",
      icon : AiOutlineUser,
      to : "/profile",
   },
]

export  const INFURA_KEY =  'c1bf28b6f255447c97d87cbf0527c644'
export const PINATA_KEY = "5f360e4d180f463c3e19"
export const PINATA_SECRET = "63b074ac1f484ebbf610cdcdb64b1813626fb540e74067756b903106b27b74db"
export const PINATA_GATEWAY = "https://gateway.pinata.cloud/ipfs/"
export const MORALIS =  "GtxKtEs7uOZI7QEeowzym8mcdIBkEFUJNZAiL9PF8f1iYJPgdI8d4WjfewM1kcYE"