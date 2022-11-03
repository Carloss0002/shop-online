import {configureStore} from '@reduxjs/toolkit'
import Cart from '../store/cartElement'


export const store = configureStore({
    reducer:{
        Cart
    }
})


