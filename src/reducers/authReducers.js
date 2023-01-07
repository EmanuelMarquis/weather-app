import { createSlice } from "@reduxjs/toolkit";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../App";

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