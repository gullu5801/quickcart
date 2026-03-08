import "../styles/ProductCard.css";

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">

      <img src={product.image} alt={product.name} />

      <div className="product-info">

        <h3>{product.name}</h3>

        <p className="product-desc">
          {product.description}
        </p>

        <p className="price">
          ${product.price}
        </p>

        <button
          className="add-btn"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;