import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import PropTypes from "prop-types";
import Markers from "./markers.js";
import MapStyle from "./mapStyle.json";

const Map = withScriptjs(
   withGoogleMap(props => {
      return (
         <GoogleMap
            ref={map => (this._map = map)}
            defaultZoom={9}
            center={{ lat: 50.054689, lng: 5.467698 }}
            defaultOptions={{ styles: MapStyle }}
         >
            {props.shownBreweries.map(brewery => (
               <Markers
                  brewery={brewery}
                  //allBeers={props.allBeers}
                  key={brewery.title + "-marker"}
                  toggleInfoWindow={props.toggleInfoWindow}
                  infoWindowIsOpen={props.infoWindowIsOpen}
               />
            ))}
         </GoogleMap>
      );
   })
);

Map.propTypes = {
   shownBreweries: PropTypes.array.isRequired,
   allBeers: PropTypes.array.isRequired,
   toggleInfoWindow: PropTypes.func,
   infoWindowIsOpen: PropTypes.func
};

export default Map;
