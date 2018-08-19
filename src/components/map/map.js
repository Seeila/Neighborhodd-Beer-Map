import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import MapInfoWindow from "./infoWindow.js";
import Marker from "./markers.js";
import PropTypes from "prop-types";
import MapStyle from "./mapStyle.json";

const Map = withScriptjs(
   withGoogleMap(props => {
      //changes icon of marker when hovered or clicked

      return (
         <GoogleMap
            defaultZoom={9}
            center={{ lat: 50.054689, lng: 5.467698 }}
            defaultOptions={{ styles: MapStyle }}
            onClick={() => props.resetActiveMarker()}
         >
            {props.infoWindowIsOpen && (
               <MapInfoWindow
                  resetActiveMarker={props.resetActiveMarker}
                  activeMarker={props.activeMarker}
               />
            )}

            {props.shownBreweries.map(brewery => (
               <Marker
                  brewery={brewery}
                  key={brewery.title + "-marker"}
                  animation={window.google.maps.Animation.DROP}
                  onClickedMarker={props.onClickedMarker}
               />
            ))}
         </GoogleMap>
      );
   })
);

Map.propTypes = {
   shownBreweries: PropTypes.array.isRequired,
   infoWindowIsOpen: PropTypes.bool.isRequired,
   onClickedMarker: PropTypes.func.isRequired
};

export default Map;
