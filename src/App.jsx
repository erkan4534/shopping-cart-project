import { useState } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import fromData from "./data/Products/ProductFromData.json";

function App() {
  const [cart, setCart] = useState([]);
  const [productData, setProductData] = useState(fromData.productFromData);

  return (
    <div className="container mx-auto mt-6">
      <div className="px-30">
        <Header
          cart={cart}
          setCart={setCart}
          productData={productData}
          setProductData={setProductData}
        />
        <Products
          cart={cart}
          setCart={setCart}
          productData={productData}
          setProductData={setProductData}
        />
      </div>
    </div>
  );
}

export default App;
