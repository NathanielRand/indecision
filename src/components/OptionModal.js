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
      closeTimeoutMS={200}
      className="modal"
    >
      <h3 className="modal__title">Selected Option</h3>
      {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
      <button className="button__modal" onClick={props.handleClearSelectedOption}>Gotcha</button>
    </Modal>
  )
};

export default OptionModal;