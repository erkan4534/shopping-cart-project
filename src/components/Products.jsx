import ProductItem from "./ProductItem";
import PropTypes from "prop-types";
import "./Products.css";

const Products = (props) => {
  return (
    <div className="products-wrapper mt-10">
      {props.productData.map((product) => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            cart={props.cart}
            setCart={props.setCart}
          />
        );
      })}
    </div>
  );
};

Products.propTypes = {
  setCartMap: PropTypes.func,
  cartMap: PropTypes.object,
  cart: PropTypes.array,
  setCart: PropTypes.func,
  productData: PropTypes.array,
  setProductData: PropTypes.func,
};

export default Products;
