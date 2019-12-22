import React from 'react';

// Stateless Functional Component - Implicitly Returned
const Action = (props) => (
  <div>
    <button
      onClick={props.handlePickOption}
      disabled={!props.hasOption}
    >Make A Decision</button>
  </div>
);

export default Action;