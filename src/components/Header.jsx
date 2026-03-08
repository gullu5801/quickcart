import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import "../styles/Header.css"

function Header({ searchTerm, onSearchChange }) {

  const { getTotalItems, toggleCart } = useCart();

  return (
    <header>

      <Link to="/">
        <h1>🛒 QuickCart</h1>
      </Link>

      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <button onClick={toggleCart}>
        Cart ({getTotalItems()})
      </button>

    </header>
  );
}

export default Header;