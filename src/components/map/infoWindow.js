import React, { Component } from "react";
import PropTypes from "prop-types";
import BeerIcon from "../../img/icon.png";
import { MAP } from "react-google-maps/lib/constants";

class MapInfoWindow extends Component {
   constructor(props) {
      super(props);
      this.state = {
         breweryInfos: []
      };
   }

   static contextTypes = { [MAP]: PropTypes.object };

   static propTypes = {
      brewery: PropTypes.object.isRequired,
      brewerysBeers: PropTypes.array.isRequired
   };

   componentDidMount() {
      this.getPlaceDetails();
   }

   getPlaceDetails = () => {
      const service = new window.google.maps.places.PlacesService(
         this.context[MAP]
      );

      service.getDetails(
         { placeId: this.props.brewery.id },
         (place, status) => {
            if (status === "OK") this.setState({ breweryInfos: place });
         }
      );
   };

   render() {
      const { brewery, brewerysBeers,toggleInfoWindow } = this.props;
      const { breweryInfos } = this.state;
      console.log(breweryInfos);

      return (
         <article className="infoWindow">
            <button aria-label="close" className="close-button" onClick={() => toggleInfoWindow()}>X</button>
            <header>
               <img src={
                  breweryInfos.photos
                     ? breweryInfos.photos[0].getUrl({
                          maxWidth: 330,
                          "max-height": 300
                       })
                     : BeerIcon
                  }
                  alt={
                     breweryInfos.photos
                        ? breweryInfos.photos[0].html_attributions[0]
                        : brewery.title
                  }
               />
               <h2>{brewery.title}</h2>
            </header>
            <main>
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
