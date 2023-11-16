// BasketPage.tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems, removeItemFromCart } from "../../store/reducers/CartSlice";
import "./BasketPage.css";

const BasketPage: React.FC = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId: number) => {
    dispatch(removeItemFromCart(itemId));
  };

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="basket">
      {cartItems.length === 0 ? (
        <h1 className="basket_message">Корзина пуста!</h1>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Название</th>
                <th>Стоимость</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price + " руб."}</td>
                  <td>
                    <button onClick={() => handleRemoveItem(item.id)}>Убрать</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <strong>Итого:</strong> {totalAmount + " руб."} 
          </div>
        </>
      )}
    </div>
  );
};

export default BasketPage;
