import React from 'react';

// Stateless Functional Component - Implicitly Returned
const Option = (props) => (
  <div>
    {props.optionText}
    <button
      // Prop: Pass an in-line arrow function with "e" argument when
      // the button gets clicked and call props.handleDeleteOption and 
      // call it with props.optionText or else event object 
      // will be returned instead of actual option text.
      onClick={(e) => {
        props.handleDeleteOption(props.optionText);
      }}
    >Delete Option
    </button>
  </div>
);

export default Option;