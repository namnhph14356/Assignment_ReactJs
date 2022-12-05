import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state: any, action: any) => {
            const itemInCart = state.cart.find(
                (item: any) => item.id === action.payload.id
            );
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        incrementQuantity: (state: any, action) => {
            const item = state.cart.find((item: any) => item.id === action.payload);
            item.quantity++;
        },
        decrementQuantity: (state: any, action) => {
            const item = state.cart.find((item: any) => item.id === action.payload);
            if (item.quantity === 1) {
                item.quantity = 1;
            } else {
                item.quantity--;
            }
        },
        removeItem: (state: any, action) => {
            const removeItem = state.cart.filter(
                (item: any) => item.id !== action.payload
            );
            state.cart = removeItem;
        },
        removeAll: (state: any, action) => {
            state.cart = [];
        },
    },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, incrementQuantity, decrementQuantity, removeItem, removeAll } = cartSlice.actions;