import React, { Component } from "react";
import { Marker } from "react-google-maps";
import BeerIcon from "../../img/icon.png";
import BeerIconHover from "../../img/icon-selected.png";
import MapInfoWindow from "./infoWindow.js";
import PropTypes from "prop-types";

class Markers extends Component {
   constructor(props, context) {
      super(props, context);
      this.state = {
         infoWindowIsOpen: false,
         brewerysBeers: [],
         markerIcon: BeerIcon
      };
   }

	//opens/closes the infowindow
   toggleInfoWindow = () => {
      this.setState(prevState => ({
         infoWindowIsOpen: !prevState.infoWindowIsOpen
      }));

      this.toggleMarkerIcon();
   };

	//changes icon of marker when hovered or clicked
   toggleMarkerIcon = () => {
      this.state.markerIcon === BeerIcon
         ? this.setState({ markerIcon: BeerIconHover })
         : this.setState({ markerIcon: BeerIcon });
   };

   static propTypes = {
      brewery: PropTypes.object.isRequired
   };

   // componentDidMount() {
   //  this.filterBeersFromBrewery(this.props.brewery);
   // }
   //
   // filterBeersFromBrewery(brewery) {
   // 	const beersFromBrewery = this.props.allBeers.filter(beer => beer.brewery.brewery_name === brewery.title);
   //
   // 	this.setState({ brewerysBeers : beersFromBrewery });
   // }

   render() {
      const { brewery } = this.props;
      const { infoWindowIsOpen, brewerysBeers, markerIcon } = this.state;

      return (
         <React.Fragment>
            {infoWindowIsOpen && (
               <MapInfoWindow
                  brewery={brewery}
                  brewerysBeers={brewerysBeers}
                  infoWindowIsOpen={infoWindowIsOpen}
                  toggleInfoWindow={this.toggleInfoWindow}
                  key={brewery.title + "-infoWindow"}
               />
            )}
            <Marker
               ref={map => (this._map = map)}
               position={brewery.location}
               icon={markerIcon}
               title={brewery.title}
               animation={window.google.maps.Animation.DROP}
               onClick={() => this.toggleInfoWindow()}
               onMouseOut={() => this.toggleMarkerIcon()}
               onMouseOver={() => this.toggleMarkerIcon()}
            />
         </React.Fragment>
      );
   }
}

export default Markers;
