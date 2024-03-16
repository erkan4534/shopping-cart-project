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
            cartMap={props.cartMap}
            setCartMap={props.setCartMap}
            cartWithoutMap={props.cartWithoutMap}
            setCartWithoutMap={props.setCartWithoutMap}
          />
        );
      })}
    </div>
  );
};

Products.propTypes = {
  setCartMap: PropTypes.func,
  cartMap: PropTypes.object,
  productData: PropTypes.array,
  setProductData: PropTypes.func,
  cartWithoutMap: PropTypes.array,
  setCartWithoutMap: PropTypes.func,
};

export default Products;
