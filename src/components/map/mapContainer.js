import React, { Component } from 'react';
import Map from "./map.js";

class MapContainer extends Component {
	constructor(props) {
	   super(props);
	   this.state = {
			infoWindowIsOpen:false
	   }
	}

	toggleInfoWindow = () => {
	  this.setState(prevState => ({infoWindowIsOpen: !prevState.infoWindowIsOpen }));
	}


	render() {
		return (
			<Map
				shownBreweries={this.props.shownBreweries}
				toggleInfoWindow={this.toggleInfoWindow}
				infoWindowIsOpen={this.state.infoWindowIsOpen}
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCBqzbSiF5qx8gTuQg4l2h6Kh_EgK1IoSc&v=3.exp&libraries=geometry`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<main style={{ height: `calc(100vh - 75px)`, width: `100%` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		);
	}
}

export default MapContainer
