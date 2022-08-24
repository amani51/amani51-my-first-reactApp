import React from "react";
import {Modal,Button} from 'react-bootstrap';


class SelectedBeast extends React.Component {
  constructor(props) {
    super(props)
    
}
  render() {
    return (
      <Modal show={this.props.updateState} onHide={this.props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{this.props.selectedOne.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{this.props.selectedOne.description}
        <img src={this.props.selectedOne.image_url} alt={this.props.selectedOne.title}/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={this.props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );

  }
}
export default SelectedBeast;
