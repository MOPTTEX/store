import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IDevices } from "../../models/IDevice";


interface DevicesState {
    devices: IDevices;
    isLoading: boolean;
    error: string;
}

const initialState: DevicesState = {
    devices: {
        items: []
    },
    isLoading: false,
    error: ""
}

export const deviceSlice = createSlice({
    name: 'devices',
    initialState,
    reducers: {
        devicesFetching(state) {
            state.isLoading = true;
        },
        devicesFetchingSuccess(state, action: PayloadAction<IDevices>) {
            state.isLoading = false;
            state.error = ''
            state.devices = action.payload;
        },
        devicesFetchingError(state,action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload
        },
    }
})

export default deviceSlice.reducer;