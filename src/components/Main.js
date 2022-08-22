import React from "react";
import HornedBeast from "./HornedBeast";
import Cards from "./data.json";
class Main extends React.Component {
  render() {
    return (
      <div>
        {Cards.map((cards) => {
          if (cards.horns == 1) {
            return (
              <div
                style={{ display: "flex", alignItem: "center", float: "left" }}
              >
                <HornedBeast
                  title={cards.title}
                  imageUrl={cards.image_url}
                  description={cards.description}
                />
                
              </div>
            );
          }
          if (cards.horns == 2) {
            return (
              <div
                style={{ display: "flex", alignItem: "center", float: "left" }}
              >
                <HornedBeast
                  title={cards.title}
                  imageUrl={cards.image_url}
                  description={cards.description}
                />
              </div>
            );
          }
          if (cards.horns == 3) {
            return (
              <div
                style={{ display: "flex", alignItem: "center", float: "left" }}
              >
                <HornedBeast
                  title={cards.title}
                  imageUrl={cards.image_url}
                  description={cards.description}
                />
              </div>
            );
          }
          if (cards.horns == 100) {
            return (
              <div
                style={{ display: "inline-block", alignItem: "center" }}
              >
                
                <HornedBeast
                  title={cards.title}
                  imageUrl={cards.image_url}
                  description={cards.description}
                />
              </div>
            );
          }
        })}
      </div>
    );
  }
}
export default Main;
