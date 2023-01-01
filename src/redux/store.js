import {configureStore} from '@reduxjs/toolkit'
import userSlice from './userSlice'
//import toggleSlice from './toggleSlice';


export const store  = configureStore ({
    reducer : {
      user : userSlice,
      
    }
})
//export type RootState = ReturnType<typeof store.getState>;