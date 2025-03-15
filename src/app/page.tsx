import ProductList from "./components/ProductList";
import NewProductList from "./components/NewProductList";
export default async function Home() {

  return (
    <div>
      <h1>Sparta shop</h1>
      <NewProductList/>
      <ProductList/>
    </div>
  );
}
