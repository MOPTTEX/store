import { combineReducers, configureStore } from "@reduxjs/toolkit";
import deviceReducer from "./reducers/DeviceSlice"


const rootReducer = combineReducers({
    deviceReducer
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]