import React, { useState, useEffect } from "react";
import Button from "../reusable/Button";
import { Link } from "react-router";
import SearchBar from "../reusable/Search";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsRequest } from "../../redux/actions/product";
import { MdAddShoppingCart } from "react-icons/md";
import { addToCart } from "../../redux/actions/cart";

const Services = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All");

  const dispatch = useDispatch();
  //useSelector used to select state from redux store
  const { products, isLoading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProductsRequest());
  }, [dispatch]);

  const handleFilter = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(
      (product) =>
        category === "All" ||
        product.category.toLowerCase().includes(category.toLowerCase())
    );

  return (
    <div className="mt-20 px-10">
      <h1 className="text-indigo-900 p-1 text-center text-2xl font-bold mb-8 inline-block w-full">
        Latest Products
      </h1>

      {/* Search Bar */}
      <SearchBar search={searchQuery} setSearch={setSearchQuery} />

      {/* Filter Buttons */}
      <div className="mt-3 block p-2 md:flex justify-center items-center gap-4 ">
        {["All", "Men", "Women", "jewelery", "electronics"].map((category) => (
          <button
            key={category}
            onClick={() => handleFilter(category)}
            className="text-indigo-900 block w-30 mb-2 p-1 rounded-2xl shadow-lg bg-gradient-to-r from-slate-100 to-slate-300 hover:text-indigo-700"
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center min-h-[300px]">
          <div className="w-12 h-12 border-4 border-t-cyan-800 border-gray-300 rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-lg rounded-2xl p-6"
              >
                <div className="flex flex-col items-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-40 h-40 object-contain p-5 border-b border-cyan-800"
                  />
                  <p className="text-cyan-950 font-bold p-2 text-justify">
                    {product.title}
                  </p>
                  <p className="text-gray-600 text-sm font-bold">
                    ${product.price}
                  </p>
                  <div className="flex justify-center items-baseline gap-5">
                    <Link to={`/services/${product.id}`}>
                      <Button name="View..." />
                    </Link>

                    <button
                      className="w-10 p-2 font-bold text-indigo-400 hover:text-indigo-800"
                      onClick={() => dispatch(addToCart(product))}
                    >
                      <MdAddShoppingCart />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No products found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Services;
