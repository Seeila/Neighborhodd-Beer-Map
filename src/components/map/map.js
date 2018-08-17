import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import Markers from "./markers.js";
import MapStyle from './mapStyle.json';
import { MAP } from 'react-google-maps/lib/constants';

const Map = withScriptjs(withGoogleMap((props) =>{

  return (

      <GoogleMap
         ref={(map) => this._map = map}
        defaultZoom={9}
        center={ {lat: 50.054689, lng: 5.467698} }
        defaultOptions={{ styles: MapStyle }}
        >
        {props.shownBreweries.map(brewery => (
            <Markers
               brewery={brewery}
               //allBeers={props.allBeers}
               key={brewery.title + '-marker'} toggleInfoWindow={props.toggleInfoWindow}
               infoWindowIsOpen={props.infoWindowIsOpen}
            />

        ))}

      </GoogleMap>
    );
  }
))

export default Map;
