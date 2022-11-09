import {configureStore} from '@reduxjs/toolkit'
import Cart from '../store/reducers/cartElement'


export const store = configureStore({
    reducer:{
        Cart
    }
})


