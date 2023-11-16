import { useDispatch } from "react-redux";
import { IDevice } from "../../models/IDevice";
import "./DeviceCart.css";
import { addItemToCart } from "../../store/reducers/CartSlice";
import { useState } from "react";
import { Link } from "react-router-dom";

type Props = {
  devices: IDevice;
};
export default function DeviceCart({ devices }: Props) {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        id: devices.id,
        name: devices.name,
        price: devices.price,
        quantity: 1,
      })
    );
    setAddedToCart(true);
  };
  return (
    <div className="cart">
      <h3 className="cart_title">{devices.name}</h3>
      <img className="cart_img" src={devices.image} alt={devices.name} />
      <div className="cart_price">{devices.price}</div>
      {addedToCart ? (
        <Link to="/basket">
          <button>Оформить заказ</button>
        </Link>
      ) : (
        <button onClick={handleAddToCart}>Добавить в корзину</button>
      )}
    </div>
  );
}