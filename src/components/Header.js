import React from 'react';

// Stateless Functional Component - Implicitly Returned
const Header = (props) => (
  <div>
    <h1>{props.title}</h1>
    {/* Conditional rendering if subtitle exists/passed */}
    {props.subtitle && <h2>{props.subtitle}</h2>}
  </div>
);

// Default Header props
Header.defaultProps = {
  title: 'Indecision'
};

export default Header;