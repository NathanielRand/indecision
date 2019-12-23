import React from 'react';
import Option from './Option';

// Stateless Functional Component - Implicitly Returned
const Options = (props) => (
  <div>
    <div className="widget-header">
      <h4 className="widget-header__title">Options: {props.options.length}</h4>
      <button
        className="button button--link"
        onClick={props.handleDeleteOptions}
      >Remove All
      </button>
    </div>
    <div>
      {props.options.length === 0 && <p className="widget__alert">Add options to start deciding</p>}
      {
        props.options.map((option) => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </div>
  </div>
);

export default Options;