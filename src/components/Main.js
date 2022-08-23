import React from "react";
import HornedBeast from "./HornedBeast";
import Cards from "./data.json";
import Row from 'react-bootstrap/Row';
class Main extends React.Component {
  render() {
    return (
      <div>
        <Row xs={1} md={3} className="g-4">
        {Cards.map((cards) => {
          return (
            <div
             
            >
              <HornedBeast
                title={cards.title}
                imageUrl={cards.image_url}
                description={cards.description}
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
