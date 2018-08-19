import React, { Component } from "react";
import { Marker } from "react-google-maps";
import BeerIcon from "../../img/icon.png";
import BeerIconHover from "../../img/icon-selected.png";
import PropTypes from "prop-types";

class Markers extends Component {
   constructor(props, context) {
      super(props, context);
      this.state = {
         brewerysBeers: [],
         MarkerIsActive: false
      };
   }

   static propTypes = {
      brewery: PropTypes.object.isRequired,
      onClickedMarker: PropTypes.func.isRequired
   };

   //changes icon of marker when hovered or clicked
   toggleMarkerIcon = () => {
      this.setState(prevState => ({
         MarkerIsActive: !prevState.MarkerIsActive
      }));
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
      const { brewery, onClickedMarker } = this.props;
      const { MarkerIsActive } = this.state;

      return (
         <Marker
            position={brewery.location}
            key={brewery.title + "-marker"}
            icon={MarkerIsActive ? BeerIconHover : BeerIcon}
            title={brewery.title}
            animation={window.google.maps.Animation.DROP}
            onClick={() => onClickedMarker(brewery)}
            onMouseOver={() => this.toggleMarkerIcon()}
            onMouseOut={() => this.toggleMarkerIcon()}
         />
      );
   }
}

export default Markers;
