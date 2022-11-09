import produce from 'immer'
import {createSlice} from '@reduxjs/toolkit'


let initialState:any = {
    products: [],
    
}

export const cartShopping = createSlice({
        name: 'cart',
        initialState,
        reducers:{
            add: (state, action)=>{
                 return produce(state, (draft:any)=>{
                    const indexProducts = draft.products.findIndex((t:any) => t.id === action.payload.id)
                    if(indexProducts >= 0){
                        alert('item já adicionado no carrinho')
                    } else{
                        draft.products.push(action.payload)
                    }
                })
            },
            remove: (state, action)=>{
                return produce(state, (draft:any)=>{
                   const indexProducts = draft.products.findIndex((t:any) => t.id === action.payload)
                   
                   if(indexProducts >= 0){
                     draft.products.splice(indexProducts, 1)
                   }
                
               })
            }
        }
})

export const {add, remove} = cartShopping.actions

export default cartShopping.reducer