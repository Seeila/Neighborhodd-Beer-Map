import React from 'react';
import Map from "./map.js";

const MapContainer = ({shownBreweries, allBeers}) => {
		return (
			<Map
				shownBreweries={shownBreweries}
				allBeers={allBeers}
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCBqzbSiF5qx8gTuQg4l2h6Kh_EgK1IoSc&v=3.exp&libraries=geometry,places`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<main style={{ height: `calc(100vh - 75px)`, width: `100%` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		);

}

export default MapContainer
