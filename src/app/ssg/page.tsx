// SSG TEST : 아무것도 하지 않으면 SSG!
import ProductList from "@/app/ssg/components/productList";
import { Product } from "@/types/type";

const HomePage = async () => {
  const response = await fetch("http://localhost:4000/products");
  const products: Product[] = await response.json();

  return (
    <div>
      <h1>Products</h1>
      <ProductList products={products} />
    </div>
  );
};

export default HomePage;
