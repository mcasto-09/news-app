import { configureStore } from "@reduxjs/toolkit";
import hackerInitialState from "./reducers/hackerNewsReducer";

export default configureStore ({
    reducer: hackerInitialState,
})