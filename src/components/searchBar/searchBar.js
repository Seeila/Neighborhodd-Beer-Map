import React, { Component } from 'react';


class SearchBar extends Component {
   constructor(props) {
      super(props);
      this.state = {
         searchBarIsOpen:false,
         query: ''
      }
   }

   render() {
     return (
         <section id="searchBar">
            <h2>Breweries</h2>
            <input type="text" placeholder="Enter a brewery name here" />
            <ul>
               <li>blah</li>
            </ul>
         </section>
     );
  }
};

export default SearchBar;
