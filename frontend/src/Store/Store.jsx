import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './CreateSlice'
import productReducer from './ProductSlice'

const Store = configureStore({
    reducer : {
        cart : cartReducer,
        product : productReducer,
    }
});

export default Store