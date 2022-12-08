import produce from "immer";
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    BuyProducts: []
}

export const BuyProduct = createSlice({
      name: 'buy',
      initialState,
      reducers:{
         pushElementForPurchase: (state, action)=>{
             return produce(state, (draft:any)=>{
                let searchElement = draft.BuyProducts.findIndex((e:any)=> e.id === action.payload.id)
                if(searchElement >= 0){
                    draft.BuyProducts
                } else {
                    draft.BuyProducts.push(action.payload)
                }
             })
         }
      }
})

export const {pushElementForPurchase} = BuyProduct.actions

export default BuyProduct.reducer