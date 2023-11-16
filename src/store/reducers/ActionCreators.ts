import axios from "axios";
import { AppDispatch } from "../store";
import { IDevices } from "../../models/IDevice";
import { deviceSlice } from "./DeviceSlice";

export const fetchDevices = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(deviceSlice.actions.devicesFetching());
    const response = await axios.get<IDevices>(
      "https://appevent.ru/dev/task1/catalog"
    );
    dispatch(deviceSlice.actions.devicesFetchingSuccess(response.data));
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      dispatch(
        deviceSlice.actions.devicesFetchingError(
          error.response?.data || "Произошла ошибка"
        )
      );
    } else {
      dispatch(
        deviceSlice.actions.devicesFetchingError("Произошла неизвестная ошибка")
      );
    }
  }
};
