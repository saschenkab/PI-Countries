import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountriesByNameAction } from "../../redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.length) {
      alert("Please enter a country name");
    }
    dispatch(getCountriesByNameAction(name, dispatch));
    setName("");
  };

  const handleKeyChange = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      dispatch(getCountriesByNameAction(name, dispatch));
      setName("");
    }
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  return (
    <div>
      <input
        value={name}
        type="text"
        placeholder="Search for a country"
        onKeyDown={handleKeyChange}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
};

export default SearchBar;
