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
        allBeers: []
     }
  }

  componentDidMount() {
    this.setState({ shownBreweries : breweries });
    let beers = [];
    for(let i=0; i < 150; i+=50) {
       fetch(`https://api.untappd.com/v4/user/beers/seeila?client_id=0EA22DB517F8236B59C8E2CC5884789D3240D5D2&client_secret=BCB22A2739CAC50711B0852E5CD4D8122A4B2026&limit=50&offset=${i} `).then(response => {
          return response.json();
       }).then(response => {
          beers.push(...response.response.beers.items);
       }).then(response => {
          if(beers.length > 100) {
            this.setState({ allBeers : beers });
          }
       });
   }
  }

  render() {
    const {shownBreweries, allBeers } = this.state;

    if(!shownBreweries.length) return <p>Loading</p>;

    return (
      <React.Fragment>
        <Header />
        <Nav shownBreweries={shownBreweries}/>
        <MapContainer shownBreweries={shownBreweries} allBeers={allBeers}/>
      </React.Fragment>
    );
  }
}

export default App;
