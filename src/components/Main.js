import React from "react";
import HornedBeast from "./HornedBeast";
import Row from "react-bootstrap/Row";
class Main extends React.Component {
  constructor(props) {
    super(props)
}
  render() {
    return (
      <div>
        <Row xs={1} md={3} className="g-4">
          {this.props.Cards.map((cards) => {
            return (
              <div>
                <HornedBeast
                  title={cards.title}
                  imageUrl={cards.image_url}
                  description={cards.description}
                  clicked={this.props.update}
                />
              </div>
            );
          })}
        </Row>
      </div>
    );
  }
}
export default Main;
