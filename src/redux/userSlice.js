import {createSlice} from '@reduxjs/toolkit'
import {VocdoniSDKClient} from '@vocdoni/sdk'

  const vocdoni = new VocdoniSDKClient({
    env: EnvOptions.STG, // mandatory, can be 'dev' or 'prod'
    wallet: signer, // optional, the signer used (Metamask, Walletconnect)
  })

 const initialState = {
    user : {},
     isAuthenticated : false,
     orbis :  {},
     vocdoni : vocdoni
 }

 const useSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        setUser: (state, action) => {
            state.user = action.payload.currentUser
            if(action.payload.currentUser.details){
             state.isAuthenticated = true
            }
        },
        setOrbisObject : (state, action) => {
            state.orbis = action.payload
        }
    }
 })

 export const {setUser, setOrbisObject} = useSlice.actions
 export default useSlice.reducer