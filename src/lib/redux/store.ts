import { combineReducers, configureStore } from "@reduxjs/toolkit";
import PropertyReducer from "./propertySlice";
const rootReducer = combineReducers({
    property: PropertyReducer
});


export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
