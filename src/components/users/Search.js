import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ showClear, clearUsers, searchUsers, setAlert }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something!", "danger");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search User'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-success btn-block'
        />
        {showClear && (
          <button className='btn btn-primary btn-block' onClick={clearUsers}>
            Clear
          </button>
        )}
      </form>
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
