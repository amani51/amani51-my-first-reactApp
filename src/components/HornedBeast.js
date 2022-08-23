import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: "",
      click: "",
    };
  }

  favoriteImage = () => {
    this.setState({
      favorite: this.state.favorite + "💛",
    });
  };

  message = () => {
    this.setState({
      Click: alert(`This is a ${this.props.title}`),
    });
  };

  render() {
    return (
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={this.props.imageUrl}
            onClick={this.favoriteImage}
          />
          <Card.Body onClick={this.message}>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
              <br /> Favorites: {this.state.favorite}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default HornedBeast;
