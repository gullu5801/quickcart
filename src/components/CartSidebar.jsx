import { useCart } from "../hooks/useCart";
import "../styles/CartSidebar.css";

function CartSidebar() {

  const {
    cart = [],
    isCartOpen,
    toggleCart,
    updateQuantity,
    removeFromCart,
    getTotalPrice
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="cart-sidebar">

      <button onClick={toggleCart}>Close</button>

      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map(item => (
          <div key={item.id} className="cart-item">

            <h4>{item.name}</h4>
            <p>${item.price}</p>

            <button onClick={() =>
              updateQuantity(item.id, item.quantity - 1)
            }>
              -
            </button>

            {item.quantity}

            <button onClick={() =>
              updateQuantity(item.id, item.quantity + 1)
            }>
              +
            </button>

            <button onClick={() =>
              removeFromCart(item.id)
            }>
              Remove
            </button>

          </div>
        ))
      )}

      <h3>Total: ${getTotalPrice()}</h3>

    </div>
  );
}

export default CartSidebar;