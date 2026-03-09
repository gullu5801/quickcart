import ProductList from "./ProductList";
import { useCart } from "../hooks/useCart";

function HomePage({ products, searchTerm }) {

  const { addToCart } = useCart();

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>

      <ProductList
        products={filteredProducts}
        onAddToCart={addToCart}
      />

      {filteredProducts.length === 0 && (
        <p>No products found</p>
      )}

    </div>
  );
}

export default HomePage;