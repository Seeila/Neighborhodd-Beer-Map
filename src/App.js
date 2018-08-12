import React, { Component } from 'react';
import Header from './components/header/header.js';
import Nav from './components/nav/nav.js';
import MapContainer from './components/map/mapContainer.js';
import './App.css';
import breweries from './data/breweries.json';

class App extends Component {

  constructor(props) {
     super(props);
     this.state = {
        shownBreweries:[],
     }
  }

  componentDidMount() {
    this.setState({ shownBreweries : breweries })
  }

  render() {
    const {shownBreweries } = this.state;

    if(!shownBreweries.length) return <p>Loading</p>;

    return (
      <React.Fragment>
        <Header />
        <Nav shownBreweries={shownBreweries}/>
        <MapContainer shownBreweries={shownBreweries}/>
      </React.Fragment>
    );
  }
}

export default App;
