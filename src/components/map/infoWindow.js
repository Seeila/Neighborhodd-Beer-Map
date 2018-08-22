import React, { Component } from "react";
import PropTypes from "prop-types";
import Brewery from "../../img/brewery.jpg";
import { MAP } from "react-google-maps/lib/constants";

class MapInfoWindow extends Component {
   constructor(props) {
      super(props);
      this.state = {
         breweryInfos: [],
         noStatusError: true,
         brewerysBeers: []
      };
   }
   // necessary to retrieve the map's ID
   static contextTypes = { [MAP]: PropTypes.object };

   static propTypes = {
      allBeers: PropTypes.array.isRequired,
      activeMarker: PropTypes.object.isRequired,
      resetActiveMarker: PropTypes.func.isRequired
   };

   componentDidMount() {
      this.getPlaceDetails();
      this.breweryTitle.focus();
      this.findBrewerysBeers();
   }

   //needed to update place service when clicking on the search list item
   componentDidUpdate() {
      this.breweryTitle.focus();
   }

   componentWillUnmount() {
      const searchResultsList = document.querySelector('ul[role="listbox"]');
      if(searchResultsList) searchResultsList.focus();
   }

   findBrewerysBeers() {
      let brewerysBeers = this.props.allBeers.filter(beer => beer.brewery.brewery_name === this.props.activeMarker.title);
      console.log(brewerysBeers);
   }

   //get details of place via google maps place service
   getPlaceDetails = () => {
      const service = new window.google.maps.places.PlacesService(
         // gets the id of the map
         this.context[MAP]
      );
      service.getDetails(
         { placeId: this.props.activeMarker.id },
         (place, status) => {
            if (status === "OK") {
               this.setState({ breweryInfos: place });
            } else {
               console.log(status);
               this.setState({ statusError: false });
            }
         }
      );
   };

   render() {
      const { resetActiveMarker, activeMarker, allBeers } = this.props;
      const { breweryInfos, noStatusError } = this.state;
      return (
         <article className="infoWindow">
            <button
               aria-label="close"
               className="close-button"
               onClick={() => resetActiveMarker()}
            >
               X
            </button>
            <header>
               <img
                  src={
                     breweryInfos.photos
                        ? breweryInfos.photos[0].getUrl({
                             maxWidth: 400,
                             "max-height": 300
                          })
                        : Brewery
                  }
                  alt={
                     breweryInfos.photos
                        ? breweryInfos.photos[0].html_attributions[0]
                        : activeMarker.title
                  }
               />
            <h2 autoFocus ref={b => this.breweryTitle = b} tabIndex="0">{activeMarker.title}</h2>
            </header>

            {noStatusError && (
               <main tabIndex="0">
               {breweryInfos.formatted_address && (
                  <p>{breweryInfos.formatted_address}</p>
               )}
               {breweryInfos.website && (
                  <a href={breweryInfos.website}>Website</a>
               )}
               {breweryInfos.formatted_phone_number && (
                  <p>{breweryInfos.formatted_phone_number}</p>
               )}
               {breweryInfos.opening_hours && (
                  <section>
                     <h3>Opening hours:</h3>
                     <ul>
                        {breweryInfos.opening_hours.weekday_text.map(
                           (day, index) => (
                              <li key={"day" + (index + 1)}>{day}</li>
                           )
                        )}
                     </ul>
                  </section>
               )}
               {allBeers.length && (
                  <h3>Beers</h3>
               )}
            </main>
            )}
            {this.state.statusError && (
               <main>
                  <p tabIndex="0">Sorry we couldn't load this place informations. Please try again</p>
               </main>
            )}
         </article>
      );
   }
}

export default MapInfoWindow;
