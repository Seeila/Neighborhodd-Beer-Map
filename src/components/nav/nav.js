import React, { Component } from 'react';
import SearchBar from '../searchBar/searchBar.js';

class Nav extends Component {
   constructor(props) {
      super(props);
      this.state = {
         searchBarIsOpen:false,
         query: ''
      }
   }

   render() {
     return (
       <nav role="navigation">
         <button id="menubutton" aria-haspopup="true" aria-expanded="false" aria-controls="searchBar" aria-label="Search Pannel">
           <span></span>
           <span></span>
           <span></span>
         </button>
         <SearchBar />
       </nav>
     );
  }
};

export default Nav;
