import { useEffect } from "react";
import "./DevicePage.css";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchDevices } from "../../store/reducers/ActionCreators";
import DeviceCart from "../../components/DeviceCart/DeviceCart";

export default function DevicePage() {
  const dispatch = useAppDispatch()
  const {devices, isLoading, error} = useAppSelector(state => state.deviceReducer)

  useEffect( () => {
    dispatch(fetchDevices())
  }, [dispatch])

  if (isLoading) {
    return <h1>Идет загрузка...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  return <div>
    <div className="carts_wrapper">
        {devices &&
          devices.items.map((item) => (
            <div className="carts_wrapper__container" key={item.id}>
              <DeviceCart devices={item} />
            </div>
          ))}
      </div>
    </div>;
}
