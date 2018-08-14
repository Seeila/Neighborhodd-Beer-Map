import React, { Component } from 'react';
import { Marker } from "react-google-maps";
import BeerIcon from "../../img/icon.png";
import MapInfoWindow from "./infoWindow.js";

class Markers extends Component  {
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
		const {brewery} = this.props;
		const {infoWindowIsOpen} = this.state;

		return (
	      <Marker
	         position={brewery.location}
	         icon={BeerIcon}
	         title={brewery.title}
	         animation={window.google.maps.Animation.DROP}
				onClick={() => this.toggleInfoWindow()}
	      >
			 {infoWindowIsOpen && <MapInfoWindow brewery={brewery} infoWindowIsOpen={infoWindowIsOpen} key={brewery.title + '-infoWindow'}/>}
	      </Marker>
		)
	}
}

export default Markers;
