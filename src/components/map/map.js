import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

const Map = withScriptjs(withGoogleMap((props) =>{

  return (
      <GoogleMap
        defaultZoom={9}
        center={ {lat: 50.054689, lng: 5.467698} }
        >
      </GoogleMap>
    );
  }
))

export default Map;
