import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Headphones", price: 2000 },
  { id: 3, name: "Mouse", price: 800 }
];

export default function ProductList() {
  const { dispatch } = useContext(CartContext);

  return (
    <div>
      <h2>Products</h2>

      {products.map(product => (
        <div key={product.id}>
          <p>
            {product.name} - ₹{product.price}
          </p>
          <button
            onClick={() =>
              dispatch({ type: "ADD_TO_CART", payload: product })
            }
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
