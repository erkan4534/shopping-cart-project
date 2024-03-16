import PropTypes from "prop-types";
import ShoppingCart from "./ShoppingCart";
import AddNewProductModel from "../UI/AddNewProductModel";
import { useState } from "react";

const Header = ({ setCartMap, cartMap, productData, setProductData }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex justify-between">
      <div className="flex flex-row">
        <h1 className="font-semibold text-3xl">Shopping Center</h1>

        <button
          id="myBtn"
          onClick={() => setShowModal(true)}
          className="ml-5 color h-10 w-40 bg-indigo-500 rounded-lg 
        text-amber-50 font-bold"
        >
          New Add Product
        </button>

        <AddNewProductModel
          showModal={showModal}
          setShowModal={setShowModal}
          productData={productData}
          setProductData={setProductData}
        />
      </div>

      {cartMap && cartMap.size != 0 && (
        <ShoppingCart setCartMap={setCartMap} cartMap={cartMap} />
      )}
    </div>
  );
};

Header.propTypes = {
  productData: PropTypes.array,
  setProductData: PropTypes.func,
  setCartMap: PropTypes.func,
  cartMap: PropTypes.object,
  shoppingModalRef: PropTypes.object,
};

export default Header;
