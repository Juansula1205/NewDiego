import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
const SearchBar = () => {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div className="flex flex-col p-2 mx-auto text-white">
      SearchBar
      <label
        className="bg-gray-950 rounded-xl flex p-2 mx-auto items-center gap-1"
        htmlFor="idSearch"
      >
        <input
          className="bg-gray-950"
          type="text"
          id="idSearch"
          onChange={(e) => handleChange(e)}
        />
        <IoIosSearch />
      </label>{" "}
      {query}
    </div>
  );
};

export default SearchBar;
