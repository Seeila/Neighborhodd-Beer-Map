import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchBar extends Component {
   constructor(props) {
      super(props);
      this.state = {
         query: "",
         focusedListItem: 0
      };
   }

   static propTypes = {
      shownBreweries: PropTypes.array.isRequired,
      searchBarIsOpen: PropTypes.bool.isRequired,
      updateShownBreweries: PropTypes.func.isRequired,
      onClickedMarker: PropTypes.func.isRequired
   };

   componentDidUpdate() {
      // if the element currently focused is the menu button
      // setTimeout to focus on iput after the fadeIn animation,
      // doesnt'work if not delayed
      if (document.activeElement === document.getElementById("menubutton")) {
         setTimeout(() => this.searchInput.focus(), 600);
      }
   }

   //updates the query state and the showed breweries depending the query
   updateQuery = query => {
      this.setState({ query: query.trim() });
      this.props.updateShownBreweries(query);
   };

   changeItemFocus(event) {
      //down arrow key
      if (event.which === 40) {
         this.focusOnUpperElement();
      }
      //up arrow key
      if (event.which === 38) {
         this.focusOnLowerElement();
      }
      //enter or space key
      if (event.which === 13 || event.which === 32) {
         this.clickOnFocusedElement();
      }
   }

   clickOnFocusedElement = () => {
      // gets the text content of the btn
      // searches the brewery with the same title as the textContent
      // then passes it to the onclickedMarker function
      // and unfocus the elements in the search results by setting the state to 0
      const buttonElement = document.getElementById(
         `listItem${this.state.focusedListItem}`
      ).firstChild;
      let breweryTitle = buttonElement.textContent;
      let brewery = this.props.shownBreweries.find(
         brewery => brewery.title === breweryTitle
      );
      this.props.onClickedMarker(brewery);
      this.setState({ focusedListItem: 0 });
   };

   focusOnUpperElement() {
      //increses the focusedListItem by one except if reaching the end, returns to the first item
      if (this.state.focusedListItem === this.props.shownBreweries.length) {
         this.setState({ focusedListItem: 1 });
      } else {
         this.setState(prevState => ({
            focusedListItem: prevState.focusedListItem + 1
         }));
      }
   }
   //decrese the focusedListItem by one except if reaching the start, returns to the last item
   focusOnLowerElement() {
      if (this.state.focusedListItem === 1) {
         this.setState({ focusedListItem: this.props.shownBreweries.length });
      } else {
         this.setState(prevState => ({
            focusedListItem: prevState.focusedListItem - 1
         }));
      }
   }

   render() {
      const { shownBreweries, searchBarIsOpen } = this.props;
      const { query, focusedListItem } = this.state;

      return (
         <section id="searchBar" className={searchBarIsOpen ? "open" : null}>
            <h2>Breweries</h2>
            <input
               autoFocus
               type="text"
               placeholder="Enter a brewery name here"
               value={query}
               onChange={event => this.updateQuery(event.target.value)}
               ref={c => (this.searchInput = c)}
            />
            <ul
               role="listbox"
               tabIndex={shownBreweries.length ? "0" : "-1"}
               aria-activedescendant={`listItem${focusedListItem}`}
               onKeyDown={event => this.changeItemFocus(event)}
            >
               {shownBreweries.map((brewery, index) => (
                  <li
                     key={`Search ${brewery.title}`}
                     id={`listItem${index + 1}`}
                     role="option"
                     className={
                        focusedListItem === index + 1 ? "focused" : null
                     }
                     aria-selected={
                        focusedListItem === index + 1 ? true : false
                     }
                  >
                     <button
                        tabIndex="-1"
                        onClick={() => this.props.onClickedMarker(brewery)}
                     >
                        {brewery.title}
                     </button>
                  </li>
               ))}
            </ul>
         </section>
      );
   }
}

export default SearchBar;
