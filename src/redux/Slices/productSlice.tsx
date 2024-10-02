import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
    Brand: string;
    Description: string;
    Price: string;
    Image: string;
    id: string;
}

interface ProductState {
    products: {
        data: Product[];
    };
    productItem?: Product;
}

const initialState: ProductState = {
    products: {
        data: [],
    },
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        updateMobiles: (state, action: PayloadAction<Product[]>) => {
            state.products.data = action.payload; // Ürün listesini güncelle
        },
    }
});

export const { updateMobiles } = productSlice.actions;
export default productSlice.reducer;
