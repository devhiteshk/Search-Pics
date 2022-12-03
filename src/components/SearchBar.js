import './searchBar.css'

import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  // prevent default behaivour of onSubmit form event
  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  };

  // set term using usestate
  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className='search-bar'>
      <form onSubmit={handleFormSubmit}>
        <label>Search for image</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
