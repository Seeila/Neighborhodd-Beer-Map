import React, { Component } from "react";
import escapeRegExp from "escape-string-regexp";
import Header from "./components/header/header.js";
import Nav from "./components/nav/nav.js";
import MapContainer from "./components/map/mapContainer.js";
import "./App.css";
//imports the location, id and name of the breweries
import breweries from "./data/breweries.json";
import * as BeerAPI from "./data/beerAPI";

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         shownBreweries: [],
         allBeers: [],
         query: "",
         activeMarker: {},
         infoWindowIsOpen: false
      };
   }

   componentDidMount() {
      this.setState({ shownBreweries: breweries });
      BeerAPI.getAllBeers().then(res => {
         this.setState({ allBeers: res[res.length-1] });
      });
   }


   // shows the breweries depending the search results,
   //If there is no query, all breweries are shown
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

   resetActiveMarker = () => {
      this.setState({
         activeMarker: null,
         infoWindowIsOpen: false
      });
   };

   onClickedMarker = brewery => {
      if (this.state.infoWindowIsOpen) {
         this.resetActiveMarker();
      }
      this.setState({
         activeMarker: brewery,
         infoWindowIsOpen: true
      });
   };

   render() {
      const {
         shownBreweries,
         allBeers,
         activeMarker,
         infoWindowIsOpen
      } = this.state;
      // if(!allBeers.length) return <p>Loading</p>;
      return (
         <React.Fragment>
            <Header />
            <Nav
               shownBreweries={shownBreweries}
               updateShownBreweries={this.updateShownBreweries}
               onClickedMarker={this.onClickedMarker}
            />
            <MapContainer
               shownBreweries={shownBreweries}
               allBeers={allBeers}
               onClickedMarker={this.onClickedMarker}
               infoWindowIsOpen={infoWindowIsOpen}
               activeMarker={activeMarker}
               resetActiveMarker={this.resetActiveMarker}
            />
         </React.Fragment>
      );
   }
}

export default App;
