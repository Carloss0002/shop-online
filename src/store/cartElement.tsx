import {createSlice} from '@reduxjs/toolkit'


let initialStore:object[] = []

export const cartShopping = createSlice({
        name: 'cart',
        initialState:initialStore,
        reducers:{
            add: (state, action)=>{
                state.push(action.payload)
                console.log(initialStore)
                
            },
            remove: (state, action)=>{
                state.filter((item:any)=>item !== action.payload)
            }
        }
})

export const {add, remove} = cartShopping.actions

export default cartShopping.reducer