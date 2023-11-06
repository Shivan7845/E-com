import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios';
export const STATUSES = Object.freeze(
    {
        IDLE : 'idle',
        ERROR : 'error',
        LOADING : 'loading',
    }
);
 const ProductSlice = createSlice({
    name : 'product',
    initialState : {
        data : [],
        status : STATUSES.IDLE,
    },
    reducers : {
        // setProducts(state,action){
        //     state.data = action.payload;
        // },
        // setStatus(state,action){
        //     state.status = action.payload
        // }
    },
    extraReducers : (builder) =>{
        builder
        .addCase(fetchProduct.pending ,(state,action) =>{
            state.status = STATUSES.LOADING;
        })
        .addCase(fetchProduct.fulfilled , (state,action) =>{
            state.data = action.payload;
            state.status = STATUSES.IDLE;

        })
        .addCase(fetchProduct.rejected, (state,action) =>{
            state.status = STATUSES.ERROR;
            
        })
    }
})
export const { setProducts,setStatus } = ProductSlice.actions;
export default ProductSlice.reducer;

//Thunks (middleware)

// export function fetchProduct() {
//     return async function fetchProductThunk (dispatch , getstate){
//         dispatch(setStatus(STATUSES.LOADING));
//         try {
//         const {data} = await axios.get('https://fakestoreapi.com/products');
//          dispatch(setProducts(data));
//         dispatch(setStatus(STATUSES.IDLE));
//         } catch (error) {
//             console.log(error)
//             dispatch(setStatus(STATUSES.ERROR));
//         }
//     }
// }

export const fetchProduct = createAsyncThunk("product/fetch",
    async () =>{
        const {data} = await axios.get('https://fakestoreapi.com/products');
        return data;
    })
