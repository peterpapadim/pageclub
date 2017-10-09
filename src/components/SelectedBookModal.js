import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const SelectedBookModal = (props) => {
  return(
    <div className="static-modal">
      <Modal.Dialog className="selected-book-modal">
        <Modal.Header>
          <Modal.Title>{props.book.volumeInfo.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="container-fluid">
              <div className="row" >
                <div id="book-cover" className="col-3">
                  <img src={props.book.volumeInfo.imageLinks.thumbnail} />
                </div>
                <div id="book-description" className="col-9">
                  <p>{props.book.volumeInfo.description}</p>
                  <p>Author(s): {props.book.volumeInfo.authors.join(", ")}</p>
                  <p>Publish Year: {props.book.volumeInfo.publishedDate.split('-')[0]}</p>
                  <p>Page Count: {props.book.volumeInfo.pageCount}</p>
                </div>
              </div>
         </div>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={props.clearSelectedBook}>Close</Button>
          <Button bsStyle="primary">+</Button>
        </Modal.Footer>

      </Modal.Dialog>
    </div>
  )
}

export default SelectedBookModal;
