import React from 'react';
import Option from './Option';

// Stateless Functional Component - Implicitly Returned
const Options = (props) => (
  <div>
    <div className="widget-header">
      <h4 className="widget-header__title">OPTIONS: {props.options.length}</h4>
      <button
        className="button button--link"
        onClick={props.handleDeleteOptions}
      >REMOVE ALL
      </button>
    </div>
    <div>
      {props.options.length === 0 && <p className="widget__alert">Add options to start</p>}
      {
        props.options.map((option, index) => (
          <Option
            key={option}
            optionText={option}
            count={index + 1}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </div>
  </div>
);

export default Options;