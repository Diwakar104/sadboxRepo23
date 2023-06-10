import "./styles.css";
import ProductListDetails from "./components/ProductListDetails";
import AddProducts from "./components/AddProducts";
import UpdateProduct from "./components/UpdateProduct";
export default function App() {
  return (
    <div className="App">
      <ProductListDetails />
      <AddProducts />
      <UpdateProduct
        product={{
          id: 1,
          title: "product 2",
          description: "add this product",
          price: "$24"
        }}
      />
    </div>
  );
}
