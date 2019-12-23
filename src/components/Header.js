import React from 'react';

// Stateless Functional Component - Implicitly Returned
const Header = (props) => (
  <div className="header">
    <div className="container">
      <h1 className="header__title">{props.title}</h1>
      {/* Conditional rendering if subtitle exists/passed */}
      {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
    </div>
  </div>
);

// Default Header props
Header.defaultProps = {
  title: 'Indecision'
};

export default Header;