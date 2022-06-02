import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesByNameAction } from "../../redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search.length) {
      alert("Please enter a country name");
    }
    dispatch(getCountriesByNameAction(search, dispatch));
    setSearch("");
  };

  const handleKeyChange = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      dispatch(getCountriesByNameAction(search, dispatch));
      setSearch("");
    }
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onKeyDown={handleKeyChange}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
};

export default SearchBar;
