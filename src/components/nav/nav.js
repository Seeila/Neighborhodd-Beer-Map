import React, { Component } from "react";
import SearchBar from "../searchBar/searchBar.js";
import PropTypes from "prop-types";

class Nav extends Component {
   constructor(props) {
      super(props);
      this.state = {
         searchBarIsOpen: false
      };
   }

   static propTypes = {
      shownBreweries: PropTypes.array.isRequired,
      updateShownBreweries: PropTypes.func.isRequired,
      onClickedMarker: PropTypes.func.isRequired
   };

   // change the state of the searchbar from open to closed
   toggleMenu() {
      this.setState(prevState => ({
         searchBarIsOpen: !prevState.searchBarIsOpen
      }));
   }

   render() {
      return (
         <nav role="navigation">
            <button
               id="menubutton"
               aria-haspopup="true"
               aria-expanded="false"
               aria-controls="searchBar"
               aria-label="Search Pannel"
               onClick={this.toggleMenu.bind(this)}
               className={this.state.searchBarIsOpen ? "open" : null}
            >
               <span />
               <span />
               <span />
            </button>
            <SearchBar
               shownBreweries={this.props.shownBreweries}
               searchBarIsOpen={this.state.searchBarIsOpen}
               updateShownBreweries={this.props.updateShownBreweries}
               onClickedMarker={this.props.onClickedMarker}
            />
         </nav>
      );
   }
}

export default Nav;
