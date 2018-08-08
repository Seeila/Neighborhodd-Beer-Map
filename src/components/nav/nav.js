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

   toggleMenu() {
     this.setState(prevState => ({searchBarIsOpen: !prevState.searchBarIsOpen }));
   }

   render() {
     console.log(this.state.searchBarIsOpen);
     return (
       <nav role="navigation">
         <button id="menubutton" aria-haspopup="true" aria-expanded="false" aria-controls="searchBar" aria-label="Search Pannel" onClick={this.toggleMenu.bind(this)} className={this.state.searchBarIsOpen ? 'open': null} >
           <span></span>
           <span></span>
           <span></span>
         </button>
         <SearchBar shownBreweries={this.props.shownBreweries} searchBarIsOpen={this.state.searchBarIsOpen}/>
       </nav>
     );
  }
};

export default Nav;
