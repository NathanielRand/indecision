import React from 'react';
import Option from './Option';

const Options = (props) => {
  return (
    <div>
      <h2>Insert time here</h2>
      <h4>Options Count: {props.options.length}</h4>
      {/* 
				TODO: Reset option's validations error message when delete options is called 
				Example: send empty value to form, error message called, and then call delete all options
				but the error message remains.
			*/}
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Add options to get started!</p>}
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
  );
};

export default Options;