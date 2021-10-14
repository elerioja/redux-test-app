import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../redux/apiState";

export default function SearchBar() {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.api.inputValue);

  const handleInputChange = (e) => {
    dispatch(actions.updateInput(e.target.value));
  };

  const handleSearch = () => {
    if (inputValue !== "") {
      dispatch(actions.performSearch(inputValue));
    }
  };

  return (
    <div className="search-bar">
      <input
        onChange={(e) => handleInputChange(e)}
        value={inputValue}
        className="search-input"
      />
      <button
        className="search-button"
        onClick={() => {
          handleSearch();
        }}
      >
        Search
      </button>
    </div>
  );
}
