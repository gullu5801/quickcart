import { useCart } from "../hooks/useCart";
import "../styles/CartPage.css"

function CartPage() {

  const { cart, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  if (cart.length === 0) {
    return <h2>Your cart is empty</h2>;
  }

  return (

    <div>

      <h1>Shopping Cart</h1>

      {cart.map(item => (

        <div key={item.id}>

          <h3>{item.name}</h3>

          <p>${item.price}</p>

          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
          >
            -
          </button>

          {item.quantity}

          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            +
          </button>

          <button
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>

        </div>

      ))}

      <h2>Total: ${getTotalPrice()}</h2>

    </div>
  );
}

export default CartPage;