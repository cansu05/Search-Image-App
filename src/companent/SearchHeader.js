import { useState } from "react";
import "./SearchHeader.css";
import "C:/Users/cansu/Desktop/search-image-app/src/fontawesome/css/all.css";

const SearchHeader = ({ search }) => {
  const [valueInput, setValue] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    search(valueInput);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="form-wrapper">
      <h1 className="title">Search Image App</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <label>What Are You Looking For?</label>
        <div>
          <input value={valueInput} onChange={handleChange} />
          <i className="search-icon fa-solid fa-magnifying-glass"></i>
        </div>
        
      </form>
    </div>
  );
};

export default SearchHeader;
