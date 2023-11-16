import { Middleware, combineReducers, configureStore } from "@reduxjs/toolkit";
import deviceReducer from "./reducers/DeviceSlice";
import cartReducer from "./reducers/CartSlice";

const rootReducer = combineReducers({
  deviceReducer,
  cart: cartReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(saveToLocalStorage),
  });
};

const saveToLocalStorage: Middleware = (store) => (next) => (action) => {
  const result = next(action);
  const state = store.getState();
  localStorage.setItem("cart", JSON.stringify({ items: state.cart.items }));
  return result;
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
