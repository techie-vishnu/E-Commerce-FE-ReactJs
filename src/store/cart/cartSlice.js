import { createSlice } from "@reduxjs/toolkit";

// Save cart to Local Storage
const saveCartArray = (cart = []) => {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Get cart from Local Storage
const getCartArray = () => {
    if (localStorage.getItem('cart') == null) {
        localStorage.setItem('cart', JSON.stringify([]));
    }
    return JSON.parse(localStorage.getItem('cart') + '');
}

export const counterSlice = createSlice({
    name: 'cart',
    initialState: {
        cartArray: getCartArray()
    },
    reducers: {
        clearCart: (state) => {
            state.cartArray = [];
            saveCartArray();
        },
        addToCart: (state, action) => {
            let p = { ...action.payload };
            p.count = 1;
            state.cartArray.push(p);
            saveCartArray(state.cartArray);
        },
        removeFromCart: (state, action) => {
            let p = action.payload;
            if (typeof p !== 'undefined') {
                state.cartArray = state.cartArray.filter(c => c._id !== p._id)
            }
            saveCartArray(state.cartArray);
        },
        updateQuantity: (state, action) => {
            let p = action.payload.product ?? {};
            let newCount = parseInt(action.payload.count) ?? 0;
            if (newCount === 0) {
                state.cartArray = state.cartArray.filter(c => c._id !== p._id)
            }
            let index = state.cartArray.findIndex(c => c._id === p._id);
            if (index !== -1) {
                state.cartArray[index].count = parseInt(action.payload.count)
            }
            saveCartArray(state.cartArray);
        }
    }
})

// Action creators are generated for each case reducer function
export const { clearCart, addToCart, removeFromCart, updateQuantity } = counterSlice.actions

export default counterSlice.reducer