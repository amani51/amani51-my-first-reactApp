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

        <Row xs={1} md={3} className="g-4" style={{width:"100%",display:"flex",justifyContent:"center",margin:"50px"}}>
          {this.props.Cards.map((cards) => {
            return (
              <div>
                <HornedBeast
                  title={cards.title}
                  imageUrl={cards.image_url}
                  description={cards.description}
                  horns={cards.horns}
                  update={this.props.update}
                  key={this.props.title}
                  id={this.props._id}
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
