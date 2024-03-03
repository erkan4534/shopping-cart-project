//import PropTypes from "prop-types";
import "./model.css";
import { useRef, useState } from "react";
import PropTypes from "prop-types";

const initialState = {
  title: "",
  price: "",
  image: "",
};

const AddNewProductModel = ({
  showModal,
  setShowModal,
  productData,
  setProductData,
}) => {
  const modalRef = useRef();
  const [productInput, setProductInput] = useState(initialState);
  const [isShowError, setIsShowError] = useState(false);

  const modelClose = () => {
    modalRef.current.style.display = "none";
    setShowModal(false);
  };

  function handleSubmit(e) {
    e.preventDefault();

    const isFormValid = Object.values(productInput).every(
      (value) => value.trim() !== ""
    );

    if (!isFormValid) {
      console.log("Tüm alanlar dolu ve boş karakter içermemelidir.");
      setIsShowError(true);
      return;
    }

    const newProductInput = {
      ...productInput,
      price: Number(productInput.price),
      id: productData.length + 1,
    };

    setProductData([newProductInput, ...productData]);
    setProductInput(initialState);
    setShowModal(false);
  }

  function handleChange({ target: { name, value } }) {
    setProductInput({
      ...productInput,
      [name]: value,
    });
  }

  if (!showModal) {
    return <></>;
  }

  return (
    <div id="myModal" className="modal" ref={modalRef}>
      <div className="modal-content max-w-xs">
        <div className="modal-header flex justify-between">
          <h2 className="header-text mt-1">Modal Header</h2>
          <span className="close" onClick={modelClose}>
            &times;
          </span>
        </div>

        <div>
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <div className="mb-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="title"
              >
                Title
              </label>
              <input
                className="shadow text-gray-700  border rounded w-full py-2 px-3 leading-tight"
                id="title"
                name="title"
                type="text"
                placeholder="Title"
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="price"
              >
                Price
              </label>
              <input
                className="shadow text-gray-700 border rounded w-full py-2 px-3 mb-3 leading-tight"
                id="price"
                name="price"
                type="number"
                placeholder="Price"
                onChange={handleChange}
              />
            </div>

            <div className="mb-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="image"
              >
                Image
              </label>
              <input
                className="shadow text-gray-700 border rounded w-full py-2 px-3 mb-3 leading-tight"
                id="image"
                name="image"
                type="text"
                placeholder="Image"
                onChange={handleChange}
              />
              {isShowError && (
                <p className="text-red-500 text-xs italic">
                  Tüm alanlar dolu ve boş karakter içermemelidir.
                </p>
              )}
            </div>

            <button className="bg-indigo-500 text-white font-bold py-2 px-4 rounded">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

AddNewProductModel.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
  productData: PropTypes.array,
  setProductData: PropTypes.func,
};

export default AddNewProductModel;
