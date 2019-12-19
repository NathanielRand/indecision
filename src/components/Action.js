import React from 'react';

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePickOption}
        disabled={!props.hasOption}
      >Make A Decision</button>
    </div>
  );
};

export default Action;