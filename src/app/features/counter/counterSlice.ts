import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CounterState {//define types property in initialState
  value: number,
  text:string,
}

const initialState: CounterState = {
  value: 0,
  text:"Increase value",
}

export const counterSlice = createSlice({
  name: 'counter',//Attached with store put as a unique key 
  initialState,
  reducers:{ //Actions (function(state to access property in initialState,payload to receive a new value))
   increaseAction:(state,actionPayload:PayloadAction<number>)=>{//state is let you to access any property in initialState
       state.value+=actionPayload.payload
   }
  }
 
})
export const {increaseAction}= counterSlice.actions

export default counterSlice.reducer
/*
actionPayload: new value received
actionPayload: always is object 
PayloadAction to specify type actionPayload
<number> type value received
*/