import { useParams } from "react-router-dom";
import ProductList from "./ProductList";
import { useCart } from "../hooks/useCart";

function CategoryPage({ products }) {

  const { category } = useParams();
  const { addToCart } = useCart();

  const filtered = products.filter(
    p => p.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div>

      <h2>{category} Products</h2>

      <ProductList
        products={filtered}
        onAddToCart={addToCart}
      />

    </div>
  );
}

export default CategoryPage;