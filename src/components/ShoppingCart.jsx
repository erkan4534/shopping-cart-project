import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { MdOutlineShoppingCart } from "react-icons/md";
import PropTypes from "prop-types";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ShoppingCart = ({ cart, setCart }) => {
  if (cart == undefined || cart.length === 0) {
    return;
  }

  const cartMap = new Map();

  cart.forEach((item) => {
    if (cartMap.get(item)) {
      cartMap.set(item, cartMap.get(item) + 1);
    } else {
      cartMap.set(item, 1);
    }
  });

  const removeToCart = (product) => {
    if (cartMap.get(product) == 1) {
      let newCart = cart.filter((item) => item !== product);
      setCart(!newCart ? "" : newCart);
    } else {
      cartMap.set(product, cartMap.get(product) - 1);
    }

    console.log(cart);
  };

  let cartKeys = [...cartMap.keys()];

  return (
    <div>
      {" "}
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            <MdOutlineShoppingCart className="font-semibold text-3xl" />
            <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {cartKeys.map((item) => (
                <Menu.Item key={item.id}>
                  {({ active }) => (
                    <div
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block w-full px-4 py-2 text-left text-sm"
                      )}
                    >
                      <div className="inline-block">
                        <span>{item.title}</span>
                        <button
                          onClick={() => removeToCart(item)}
                          className="ml-2 w-10  rounded-md  bg-indigo-500 p-0 text-amber-50 font-bold"
                        >
                          {cartMap.get(item)}
                        </button>
                      </div>
                    </div>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

ShoppingCart.propTypes = {
  cart: PropTypes.array,
  setCart: PropTypes.func,
};

export default ShoppingCart;
