import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
  cart: []
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existing = state.cart.find(
        item => item.id === action.payload.id
      );

      if (existing) {
        return {
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          )
        };
      }

      return {
        cart: [...state.cart, { ...action.payload, qty: 1 }]
      };
    }

    case "REMOVE_FROM_CART":
      return {
        cart: state.cart.filter(item => item.id !== action.payload)
      };

    case "UPDATE_QTY":
      return {
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.qty }
            : item
        )
      };

    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
