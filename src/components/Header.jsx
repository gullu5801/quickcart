import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import "../styles/Header.css";

function Header({ searchTerm, onSearchChange }) {

  const { getTotalItems, toggleCart } = useCart();

  return (
    <header className="header">

      <div className="header-container">

        {/* Logo */}
        <Link to="/" className="logo">
          🛒 <span>QuickCart</span>
        </Link>

        {/* Search */}
        <input
          className="search-input"
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />

        {/* Cart Icon */}
        <button className="cart-btn" onClick={toggleCart}>
          🛒
          <span className="cart-count">
            {getTotalItems()}
          </span>
        </button>

      </div>

    </header>
  );
}

export default Header;