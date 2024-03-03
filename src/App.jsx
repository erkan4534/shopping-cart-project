import { useState } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import fromData from "./data/Products/ProductFromData.json";

function App() {
  const [cartMap, setCartMap] = useState(new Map());
  const [productData, setProductData] = useState(fromData.productFromData);

  return (
    <div className="container mx-auto mt-6 px-20">
      <div className="px-30">
        <Header
          cartMap={cartMap}
          setCartMap={setCartMap}
          productData={productData}
          setProductData={setProductData}
        />
        <Products
          cartMap={cartMap}
          setCartMap={setCartMap}
          productData={productData}
          setProductData={setProductData}
        />
      </div>
    </div>
  );
}

export default App;
