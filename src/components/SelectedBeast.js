import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
  constructor(props) {
    super(props)
}
  render() {
    return (
      <div>
        <img src={this.props.imageUrl}
        title={this.props.title}
        />
        <p> {this.props.description}</p>
      </div>
    //   <Modal.Dialog>
    //   <Modal.Header closeButton>
    //     <Modal.Title>{this.props.title}</Modal.Title>
    //   </Modal.Header>

    //   <Modal.Body>
    //     <p>{this.props.description}</p>
    //   </Modal.Body>

    //   <Modal.Footer>
    //     <Button variant="secondary">Close</Button>
    //     <Button variant="primary">Save changes</Button>
    //   </Modal.Footer>
    // </Modal.Dialog>
  );

  }
}
export default SelectedBeast;
