import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./slices/userSlice"

const appStore = configureStore({
    reducer: {
        user: UserReducer,
    },
    // devTools: process.env.NODE_ENV !== "production",
})

export default appStore;