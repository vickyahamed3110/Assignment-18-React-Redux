import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:'products',
    initialState: {
        products:[]
    },
    reducers:{
        getProducts:(state, action) => {
            state.products = action.payload
        },
        addQuantity:(state, action) => {
            const index = state.products.findIndex((product) => product.id == action.payload)
            const item = state.products[index]
            item.quantity +=1
        },
        decQuantity:(state, action) => {
            const index = state.products.findIndex((product) => product.id == action.payload)
            const item = state.products[index]
            if(item.quantity > 1)
            item.quantity -=1
        },
        removeProd:(state, action) => {
            const index = state.products.findIndex((product) => product.id == action.payload)
            state.products.splice(index, 1)
        }

    }})

export const {getProducts, addQuantity, decQuantity, removeProd} = productSlice.actions;
export default productSlice.reducer