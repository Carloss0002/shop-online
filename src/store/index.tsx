import {configureStore} from '@reduxjs/toolkit'
import Cart from '../store/reducers/cartElement'
import buy from '../store/reducers/buyProduct'


export const store = configureStore({
    reducer:{
        Cart,
        buy
    }
})


