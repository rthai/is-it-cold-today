import React from 'react';

const Search = (props) => (
  <div className="input-group">
    <input className="form-control" type="search" onChange={(e) => props.onChange(e)} onKeyPress={(e) => props.handleEnterKey(e)}placeholder="Enter a city (e.g. San Francisco)"></input>
    <span className="input-group-btn">
      <button type="button" className="btn btn-default" onClick={() => props.getWeather(props.searchText)}> 
        Search
      </button>
    </span>
  </div>
)

export default Search;
