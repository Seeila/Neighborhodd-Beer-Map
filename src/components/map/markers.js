import React from 'react';
import { Marker } from "react-google-maps";
import BeerIcon from "../../img/icon.png";
import MapInfoWindow from "./infoWindow.js";

const Markers = (props) => {
	return (
      <Marker
         position={props.brewery.location}
         icon={BeerIcon}
         title={props.brewery.title}
         animation={window.google.maps.Animation.DROP}
			onClick={() => props.toggleInfoWindow()}
      >
		 {props.infoWindowIsOpen && <MapInfoWindow brewery={props.brewery} infoWindowIsOpen={props.infoWindowIsOpen} key={props.brewery.title + '-infoWindow'}/>}
      </Marker>
	);
}

export default Markers;
