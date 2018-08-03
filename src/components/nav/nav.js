import React from 'react';

const Nav = () => {
  return (
    <nav role="navigation">
      <button id="menubutton" aria-haspopup="true" aria-expanded="false" aria-controls="searchBar">
        X
      </button>
      <section id="searchBar">
      </section>
    </nav>
  );
};

export default Nav;
