import React from 'react';

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      {/* 
        Todo: Add % chance of option being picked next to each option.
        Sudo: 1 divided by options.length returns % chance of option being picked.
       */}
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
};

export default Option;