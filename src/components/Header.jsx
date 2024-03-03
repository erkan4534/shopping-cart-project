import PropTypes from "prop-types";
import ShoppingCart from "./ShoppingCart";
import AddNewProductModel from "../UI/AddNewProductModel";
import { useState } from "react";

const Header = ({ cart, setCart, productData, setProductData }) => {
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
      <ShoppingCart cart={cart} setCart={setCart} />
    </div>
  );
};

Header.propTypes = {
  cart: PropTypes.array,
  setCart: PropTypes.func,
  productData: PropTypes.array,
  setProductData: PropTypes.func,
};

export default Header;
