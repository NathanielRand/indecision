import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
  return (
    <Modal
      // Convert props.selectedOption to a boolean using '!!'.
      isOpen={!!props.selectedOption}
      // Close modal on escape key or click outside of modal.
      onRequestClose={props.handleClearSelectedOption}
      contentLabel="Selected Option"
    >
      <h3>Selected Option</h3>
      {props.selectedOption && <p>{props.selectedOption}</p>}
      <button onClick={props.handleClearSelectedOption}>Gotcha</button>
    </Modal>
  )
};

export default OptionModal;