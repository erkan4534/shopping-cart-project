import PropTypes from "prop-types";
import "./Products.css";

const ProductItem = ({ product, setCartMap, cartMap }) => {
  const addToCart = (product) => {
    if (cartMap.get(product)) {
      cartMap.set(product, cartMap.get(product) + 1);
    } else {
      cartMap.set(product, 1);
    }

    setCartMap(new Map(cartMap));
  };

  return (
    <div className="border-solid border border-[#e5e7eb] relative gridHight">
      <div>
        <img
          className="object-cover h-48 w-96"
          src={product.image}
          alt="image"
        />
      </div>
      <div className="flex flex-col">
        <div>
          <span className="font-semibold">Title:</span>
          <span className="text-sm">{product.title}</span>
        </div>

        <div>
          <span className="font-semibold">Price:</span>
          <span className="text-sm">{product.price}$</span>
        </div>
      </div>

      <button
        onClick={() => addToCart(product)}
        className="bg-indigo-500 w-full h-10 rounded-lg footerButton text-amber-50 font-bold"
      >
        Add to Cart
      </button>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object,
  setCartMap: PropTypes.func,
  cartMap: PropTypes.object,
};

export default ProductItem;
