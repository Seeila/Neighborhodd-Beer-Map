import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import Markers from "./markers.js";
import MapStyle from './mapStyle.json';

const Map = withScriptjs(withGoogleMap((props) =>{
  return (
      <GoogleMap
        defaultZoom={9}
        center={ {lat: 50.054689, lng: 5.467698} }
        defaultOptions={{ styles: MapStyle }}
        >
        {props.shownBreweries.map(brewery => (
            <Markers
               brewery={brewery}
               key={brewery.title + '-marker'} toggleInfoWindow={props.toggleInfoWindow}
               infoWindowIsOpen={props.infoWindowIsOpen}
            />

        ))}

      </GoogleMap>
    );
  }
))

export default Map;
