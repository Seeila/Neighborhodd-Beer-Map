import React, { Component } from "react";

import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox";
import PropTypes from "prop-types";
import BeerIcon from "../../img/icon.png";
import { MAP } from "react-google-maps/lib/constants";

class MapInfoWindow extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
      breweryInfos: []
    };
  }

  static contextTypes = { [MAP]: PropTypes.object };

	componentDidMount() {
		this.getPlaceDetails();
	}

  getPlaceDetails = () => {
    const service = new window.google.maps.places.PlacesService(
      this.context[MAP]
    );

    service.getDetails({ placeId: this.props.brewery.id }, (place,status) => this.setState({ breweryInfos: place }));
  };

  render() {
    const { brewery, brewerysBeers } = this.props;
    const { breweryInfos } = this.state;
		console.log(breweryInfos);

		return (
      <InfoBox defaultPosition={{lat: 50.054689, lng: 5.467698}}>
			<section className="infoWindow">
				<img src={breweryInfos.photos? breweryInfos.photos[0].getUrl({'maxWidth':330, 'max-height': 300}) : BeerIcon} alt={breweryInfos.photos? breweryInfos.photos[0].html_attributions[0] : brewery.title} />
        <h2>{brewery.title}</h2>
				{breweryInfos.formatted_address && <p>{breweryInfos.formatted_address}</p>}
				{breweryInfos.website && <a href={breweryInfos.website}>Website</a>}
				{breweryInfos.formatted_phone_number && <p>{breweryInfos.formatted_phone_number}</p>}
				{breweryInfos.opening_hours &&	<section>
						<h3>Opening hours:</h3>
						<ul>
						{breweryInfos.opening_hours.weekday_text.map((day, index) => <li key={'day' + (index+1)}>{day}</li>)}
						</ul>
					</section>
				}

				<h3>Beers</h3>
			</section>
      </InfoBox>
    );
  }
}

export default MapInfoWindow;
