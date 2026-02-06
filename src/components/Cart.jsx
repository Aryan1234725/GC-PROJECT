import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

export default function Cart() {
  const { state, dispatch } = useContext(CartContext);

  const total = state.cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div>
      <h2>Cart</h2>

      {state.cart.length === 0 && <p>Cart is empty</p>}

      {state.cart.map(item => (
        <div key={item.id}>
          <p>
            {item.name} - ₹{item.price} ×{" "}
            <input
              type="number"
              min="1"
              value={item.qty}
              onChange={e =>
                dispatch({
                  type: "UPDATE_QTY",
                  payload: {
                    id: item.id,
                    qty: Number(e.target.value)
                  }
                })
              }
            />
          </p>

          <button
            onClick={() =>
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: item.id
              })
            }
          >
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>
    </div>
  );
}
