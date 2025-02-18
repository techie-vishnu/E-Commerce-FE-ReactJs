import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userData: null
    },
    reducers: {
        clearUserData: (state) => {
            state.userData = null;
        },
        setUserData: (state, action) => {
            console.log(action.payload);
            let user = { ...action.payload };
            console.log(user);
            state.userData = user;
        }
    }
})

// Action creators are generated for each case reducer function
export const { clearUserData, setUserData } = userSlice.actions

export default userSlice.reducer