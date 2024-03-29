import { useState } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import fromData from "./data/Products/ProductFromData.json";

function App() {
  const [cartMap, setCartMap] = useState(new Map());
  const [productData, setProductData] = useState(fromData.productFromData);
  const [cartWithoutMap, setCartWithoutMap] = useState([]);

  return (
    <div className="container mx-auto mt-6 px-14">
      <Header
        cartMap={cartMap}
        setCartMap={setCartMap}
        cartWithoutMap={cartWithoutMap}
        setCartWithoutMap={setCartWithoutMap}
        productData={productData}
        setProductData={setProductData}
      />
      <Products
        cartMap={cartMap}
        setCartMap={setCartMap}
        cartWithoutMap={cartWithoutMap}
        setCartWithoutMap={setCartWithoutMap}
        productData={productData}
        setProductData={setProductData}
      />
    </div>
  );
}

export default App;
