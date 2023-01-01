import { TopNav } from "./components";
import Home from "./pages/Home";
import {Route, Routes} from 'react-router-dom'
import CreateBusiness from "./pages/Dashboard";
import CreatePage from "./components/CreatePage";
import Discover from "./components/Discover";
import Integrate from "./components/Integrate";
import Profile from "./components/Profile";
import Dashboard from "./pages/Dashboard";
import { useState, useEffect, useContext} from "react";
import OrbisContext from "./context/OrbisProvider";
import { useSelector, useDispatch } from "react-redux";
import { setUser, setOrbisObject } from "./redux/userSlice";




function App() {
  const [connectedUser, setconnectedUser] = useState(false)
  const context = useContext(OrbisContext)
 // const { isAuthenticated} = useSelector(state => state.user)
 const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  console.log("the user ", user)
  const getSession = async () => {
    const res = await context.isConnected();
     return res
}

const  getConnectedUser = async () => {
  const currentUser = await getSession()
   dispatch(setUser({currentUser}))
   dispatch(setOrbisObject(context))
   console.log("conneted user", currentUser )
   setconnectedUser(true)
}

useEffect(() => {
      
  getConnectedUser()  
  console.log("the orbis", context)
  
}, [])
   
  return (
    <div className="max-w-[1300px] mx-auto ">
      
       <Routes>
        <Route  path="/" element = {<Home />}  />
        <Route  path="/discover" element = {<Dashboard />} />
        <Route   path='/create' element = {<CreatePage />}   />
        <Route  path="/discover" element = {<Discover />}  />
         <Route  path="/integration"  element = {<Integrate />}  />
         <Route path="/profile"  element = {<Profile  />}    />
      </Routes>
   
     
    </div>
  );
}

export default App;
