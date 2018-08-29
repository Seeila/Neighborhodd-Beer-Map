# Neighborhood Beer Map

*This project was part of [Udacity's Front-End Nanodegree Program](https://eu.udacity.com/course/front-end-web-developer-nanodegree--nd001).*

The Neighboor Beer Map is a single-page app created using **[React](https://reactjs.org/)** featuring a Map showing the **breweries that can be visited** in the province of Luxemburg in south Belgium. When selecting one brewery (be it a marker or an item in the search result list), you can have more informations about the brewery via **[Google Places Library](https://developers.google.com/maps/documentation/javascript/places)** (adress, website, opening hours) and informations about the beers brewed there via **[Untappd API](https://untappd.com/api/docs)**.

## For developers

### How to get started
1. This project **[node.js](https://nodejs.org/en/)** to work
2. **Clone** the repository
3. Open your **terminal** at the root of the project
4. Install **NPM** with : ```npm install```
5. start the **server** with : ```npm start```
6. A new window will open in your browser at the adress: **localhost:3000**

### Dependencies
- **[npm](https://www.npmjs.com/)**
- The project is built with **[Create React App](https://github.com/facebook/create-react-app#readme)**
- **[PropTypes](https://github.com/facebook/prop-types)** are used as basic tests
- **[Escape String RegExp](https://www.npmjs.com/package/escape-string-regexp)** is used for the search input
- **[React Google Maps](https://github.com/tomchentw/react-google-maps)** is used for **Google Maps API**
- **[Untapped API](https://untappd.com/api/docs)** is use to fetch the beer informations
