import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../../redux/actions/cart";
import { BiLeftArrowAlt } from "react-icons/bi";
import { NavLink } from "react-router";

const CartPage = () => {
  const { cartItems, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId)); // Remove product from cart
  };

  return (
    <div className="mt-20 mb-10 p-10 border border-gray-200 rounded-3xl shadow-lg max-w-4xl mx-auto">
      <h1 className="text-indigo-900 text-center text-3xl font-bold mb-10">
        Your Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          Your cart is empty!
          <NavLink to="/services">
            <span className="text-blue-600 hover:underline cursor-pointer">
              Shop Now
            </span>
          </NavLink>
        </p>
      ) : (
        <div>
          <div className="grid gap-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex bg-white shadow-md rounded-2xl p-4 hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-xl border border-gray-200"
                />
                <div className="ml-6 flex flex-col justify-between w-full">
                  <div>
                    <p className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </p>
                    <p className="text-gray-600 mt-1">
                      ${item.price.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <button
                    name="Remove"
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="self-start mt-4 px-4 py-1.5 bg-red-100 text-red-600 hover:bg-red-200 rounded-md text-sm font-medium transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-between items-center border-t pt-6 text-xl font-semibold text-gray-800">
            <p>Total Amount:</p>
            <p className="text-amber-600">${totalAmount.toFixed(2)}</p>
          </div>
        </div>
      )}
      <NavLink to="/services">
        <div className="mt-8 flex items-center underline text-gray-400 cursor-pointer hover:text-black">
          <BiLeftArrowAlt />
          <p className="">Back to shop</p>
        </div>
      </NavLink>
    </div>
  );
};

export default CartPage;
