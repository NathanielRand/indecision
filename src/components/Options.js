import React from 'react';
import Option from './Option';

// Stateless Functional Component - Implicitly Returned
const Options = (props) => (
  <div>
    <h2>Insert time here</h2>
    <h4>Options Count: {props.options.length}</h4>
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

export default Options;