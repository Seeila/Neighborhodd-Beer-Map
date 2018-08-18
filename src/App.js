import React, { Component } from "react";
import escapeRegExp from "escape-string-regexp";
import Header from "./components/header/header.js";
import Nav from "./components/nav/nav.js";
import MapContainer from "./components/map/mapContainer.js";
import "./App.css";
import breweries from "./data/breweries.json";

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         shownBreweries: [],
         allBeers: [],
         query: ""
      };
   }

   componentDidMount() {
      this.setState({ shownBreweries: breweries });
   }

   updateShownBreweries = query => {
      if (query.length > 0) {
         const match = new RegExp(escapeRegExp(query), "i");
         const searchedBreweries = breweries.filter(brewery =>
            match.test(brewery.title)
         );
         this.setState({ shownBreweries: searchedBreweries });
      } else {
         this.setState({ shownBreweries: breweries });
      }
   };

   render() {
      const { shownBreweries, allBeers } = this.state;

      // if(!allBeers.length) return <p>Loading</p>;
      return (
         <React.Fragment>
            <Header />
            <Nav
               shownBreweries={shownBreweries}
               updateShownBreweries={this.updateShownBreweries}
            />
            <MapContainer shownBreweries={shownBreweries} allBeers={allBeers} />
         </React.Fragment>
      );
   }
}

export default App;
