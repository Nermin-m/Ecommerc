import {configureStore} from '@reduxjs/toolkit';
import ProductSliceReducer from './Slices/productSlice.tsx';
export const store = configureStore({

    reducer:{
        product: ProductSliceReducer,
    }

});