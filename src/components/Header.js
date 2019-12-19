import React from 'react';

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {/* Conditional rendering if subtitle exists/passed */}
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

// Default Header props
Header.defaultProps = {
  title: 'Indecision'
};

export default Header;