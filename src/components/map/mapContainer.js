import React from "react";
import Map from "./map.js";

class MapContainer extends React.Component {

	render() {
		return (
			<Map
				shownBreweries={this.props.shownBreweries}
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCBqzbSiF5qx8gTuQg4l2h6Kh_EgK1IoSc&v=3.exp&libraries=geometry`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `100vh`, width: `100%` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		);
	}
}

export default MapContainer
