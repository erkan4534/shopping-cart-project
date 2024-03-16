import PropTypes from "prop-types";
import "./Products.css";

const ProductItem = ({
  product,
  setCartMap,
  cartMap,
  setCartWithoutMap,
  cartWithoutMap,
}) => {
  const addToCart = (product) => {
    if (cartMap.get(product)) {
      cartMap.set(product, cartMap.get(product) + 1);
    } else {
      cartMap.set(product, 1);
    }

    setCartMap(new Map(cartMap));
  };

  const addToCartWithoutMap = (item) => {
    const product = cartWithoutMap.find((pro) => pro.id === item.id);

    if (!product) {
      setCartWithoutMap([...cartWithoutMap, { ...item, amount: 1 }]);
      return;
    }

    const newCartWithoutMap = cartWithoutMap.map((pro) => {
      if (pro.id === item.id) {
        return { ...pro, amount: pro.amount + 1 };
      }

      return pro;
    });

    setCartWithoutMap(newCartWithoutMap);

    console.info(cartWithoutMap);
  };

  return (
    <div className="border-solid border border-[#e5e7eb] relative gridHight flex flex-col h-[400px]">
      <img className="object-cover h-48 w-96" src={product.image} alt="image" />

      <div className="inline-block">
        <span className="font-semibold">Title:</span>
        <span className="text-sm">{product.title}</span>
      </div>

      <div className="inline-block">
        <span className="font-semibold">Price:</span>
        <span className="text-sm">{product.price}$</span>
      </div>

      <button
        onClick={() => addToCart(product)}
        className="bg-indigo-500 w-full h-10 rounded-lg footerButtonOther text-amber-50 font-bold"
      >
        Add to Cart
      </button>

      <button
        onClick={() => addToCartWithoutMap(product)}
        className="bg-indigo-500 w-full h-10 rounded-lg footerButton text-amber-50 font-bold"
      >
        Add to Cart without Map
      </button>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object,
  setCartMap: PropTypes.func,
  cartMap: PropTypes.object,
  cartWithoutMap: PropTypes.array,
  setCartWithoutMap: PropTypes.func,
};

export default ProductItem;
