import React from 'react';

// Stateless Functional Component - Implicitly Returned
const Option = (props) => (
  <div className="option">
    <p className="option__text">{props.count}. {props.optionText} {props.chance}</p>
    <button
      className="button button--link"
      // Prop: Pass an in-line arrow function with "e" argument when
      // the button gets clicked and call props.handleDeleteOption and 
      // call it with props.optionText or else event object 
      // will be returned instead of actual option text.
      onClick={(e) => {
        props.handleDeleteOption(props.optionText);
      }}
    >REMOVE
    </button>
  </div>
);

export default Option;