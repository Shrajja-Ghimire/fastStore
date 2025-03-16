import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/actions/cart";

const DetailPage = () => {
  const { id } = useParams();
  const [details, setDetails] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const productDetails = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setDetails(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    productDetails();
  }, [id]);

  const handleAddToCart = (data) => {
    dispatch(addToCart(data)); // Dispatch addToCart action
  };
  return (
    <div className="mt-20 p-7 md:grid grid-cols-2">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <img
            src={details?.image}
            alt="details"
            className="p-10 shadow-lg rounded-2xl"
          />
          <div className="m-5 p-5 ">
            <p className="font-bold text-cyan-900">{details?.title}</p>
            <p className="font-bold text-cyan-950 mt-3">
              Category: {details?.category}
            </p>

            <p className="mt-3 text-gray-500 text-justify">
              <b className="text-cyan-950 ">Description:</b>
              <br />
              {details?.description}
            </p>
            <p className="mt-4 font-bold">${details?.price}</p>
            <div className="flex gap-7">
              <button
                onClick={() => handleAddToCart(details)}
                className="rounded-2xl mt-4 bg-gradient-to-r from-fuchsia-300 to-fuchsia-800 font-bold p-3 w-30 text-center "
              >
                Add to Cart
              </button>
              <button className="rounded-2xl mt-4 bg-gradient-to-r from-fuchsia-300 to-fuchsia-600 font-bold p-3 w-30 text-center ">
                Buy Now
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailPage;
