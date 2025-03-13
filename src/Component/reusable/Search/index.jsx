import React from "react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <form
      className=" mb-2 flex justify-center"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="px-4 py-2 rounded-lg outline-none shadow-lg"
      />
    </form>
  );
};

export default SearchBar;
