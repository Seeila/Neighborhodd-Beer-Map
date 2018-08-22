import React, { Component } from "react";
import PropTypes from "prop-types";
import Brewery from "../../img/brewery.jpg";
import { MAP } from "react-google-maps/lib/constants";

class MapInfoWindow extends Component {
   constructor(props) {
      super(props);
      this.state = {
         breweryInfos: []
      };
   }
   // necessary to retrieve the map's ID
   static contextTypes = { [MAP]: PropTypes.object };

   static propTypes = {
      activeMarker: PropTypes.object.isRequired,
      resetActiveMarker: PropTypes.func.isRequired
   };

   componentDidMount() {
      this.getPlaceDetails();
      this.breweryTitle.focus();
   }

   //needed to update place service when clicking on the search list item
   componentDidUpdate() {
      this.getPlaceDetails();
      this.breweryTitle.focus();
   }

   componentWillUnmount() {
      const searchResultsList = document.querySelector('ul[role="listbox"]');
      if(searchResultsList) searchResultsList.focus();
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
            if (status === "OK") this.setState({ breweryInfos: place });
         }
      );
   };

   render() {
      const { resetActiveMarker, activeMarker } = this.props;
      const { breweryInfos } = this.state;

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

               <h3>Beers</h3>
            </main>
         </article>
      );
   }
}

export default MapInfoWindow;
