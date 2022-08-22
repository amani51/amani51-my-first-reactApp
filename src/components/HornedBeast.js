import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
// import CardGroup from 'react-bootstrap/CardGroup';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: "",
    };
  }

  favoriteImage = () => {
    this.setState({
      favorite: this.state.favorite + "⭐️",
    });
  };

  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={this.props.imageUrl}
          onClick={this.favoriteImage}
        />
        <Card.Body>
          <Card.Title>{this.props.Title}</Card.Title>
          <Card.Text>{this.props.description }<br/>  Favorites:  {this.state.favorite}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;
