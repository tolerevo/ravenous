import React, { useState } from 'react';

function SearchBar(props){
  function handleClick() {
    let submit = 'loading your search...';
    alert(submit);
  };
return (
  <nav>
    <input type='search' onChange={'handleChange'} placeholder=' what?'/>
    <input placeholder=' where?'/>
    <button onClick={handleClick}>Let's Go!</button>
  </nav>
);
}

export default SearchBar;