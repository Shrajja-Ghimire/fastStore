import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
const CartPage = () => {
  const [cartItems, setcartItems] = useState([]);
  return (
    <div className="mt-20">
      <p className="p-9 text-center font-bold bg-amber-300 rounded-2xl">
        Your Cart
      </p>
      {cartItems.length === 0 ? (
        <div>
          <p>Your cart is empty</p>
        </div>
      ) : (
        <div>
          {cartItems.map((item) => {
            return (
              <div key={item.id}>
                <img src={item.image} alt="cart image" />
                <p>{item.title}</p>
                <p>{item.price}</p>
                <p>
                  <MdDelete />
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CartPage;
