import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        value: false
    },
    reducers: {
        logIn: (state) => {
            state.value = true
        },
        logOut: (state) => {
            state.value = false
        }
    }
})

export const {logIn, logOut} = authSlice.actions;

export default authSlice.reducer;