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

      <button className="close-btn" onClick={toggleCart}>Close</button>

      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map(item => (
          <div key={item.id} className="cart-item">

            {/* Product Image */}
            <img
              src={item.image}
              alt={item.name}
              className="cart-image"
            />

            <div className="cart-details">

              <h4>{item.name}</h4>
              <p className="cart-price">${item.price}</p>

              <div className="qty-controls">
                <button
                  onClick={() =>
                    updateQuantity(item.id, item.quantity - 1)
                  }
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    updateQuantity(item.id, item.quantity + 1)
                  }
                >
                  +
                </button>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>

            </div>
          </div>
        ))
      )}

      <h3 className="cart-total">
        Total: ${getTotalPrice()}
      </h3>

    </div>
  );
}

export default CartSidebar;