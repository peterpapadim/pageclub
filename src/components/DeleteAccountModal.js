import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const DeleteAccountModal = (props) => {
  return(
    <div className="static-modal">
      <Modal.Dialog id="delete-account-modal">
        <Modal.Header>
          <Modal.Title>Delete Pageclub Account</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Are you sure you want to proceed? There is no undoing this action once complete.
        </Modal.Body>

        <Modal.Footer>
          <Button id="delete-account-modal-cancel" onClick={props.resetDeleteClick}>Cancel</Button>
          <Button bsStyle="danger" onClick={props.handleFinalDeleteClick}>Delete Account</Button>
        </Modal.Footer>

      </Modal.Dialog>
    </div>
  )
}

export default DeleteAccountModal;
