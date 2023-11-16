import { IDevice } from "../../models/IDevice";
import "./DeviceCart.css";

type Props = {
  devices: IDevice;
};
export default function DeviceCart({ devices }: Props) {
  return (
    <div className="cart">
      <h3 className="cart_title">{devices.name}</h3>
      <img className="cart_img" src={devices.image} alt ={devices.name}/>
      <div className="cart_price">{devices.price}</div>
      <button>Добавить в корзину</button>
    </div>
  );
}
