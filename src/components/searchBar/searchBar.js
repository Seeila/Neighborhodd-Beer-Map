import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchBar extends Component {
   constructor(props) {
      super(props);
      this.state = {
         query: ""
      };
   }

   static propTypes = {
      shownBreweries: PropTypes.array.isRequired,
      searchBarIsOpen: PropTypes.bool.isRequired,
      updateShownBreweries: PropTypes.func.isRequired
   };

   updateQuery = query => {
      this.setState({ query: query.trim() });
      this.props.updateShownBreweries(query);
   };

   render() {
      return (
         <section
            id="searchBar"
            className={this.props.searchBarIsOpen ? "open" : null}
         >
            <h2>Breweries</h2>
            <input
               type="text"
               placeholder="Enter a brewery name here"
               value={this.state.query}
               onChange={event => this.updateQuery(event.target.value)}
            />
            <ul>
               {this.props.shownBreweries.map(brewery => (
                  <li key={brewery.title}>{brewery.title}</li>
               ))}
            </ul>
         </section>
      );
   }
}

export default SearchBar;
