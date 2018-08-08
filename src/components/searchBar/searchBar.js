import React, { Component } from 'react';


class SearchBar extends Component {
   constructor(props) {
      super(props);
      this.state = {
         query: ''
      }
   }

   render() {
     return (
         <section id="searchBar" className={this.props.searchBarIsOpen ? 'open': null} >
            <h2>Breweries</h2>
            <input type="text" placeholder="Enter a brewery name here" />
            <ul>
               {this.props.shownBreweries.map(brewery => <li key={brewery.title}>{brewery.title}</li>)}
            </ul>
         </section>
     );
  }
};

export default SearchBar;
