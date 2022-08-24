import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

class HornedBeast extends React.Component {
  
  constructor(props) {
    super(props)
}
  render() {
    return (
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={this.props.imageUrl}
             onClick={()=>{this.props.update(this.props.horns)}}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
              <br /> 
              Number of horns: {this.props.horns}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default HornedBeast;
