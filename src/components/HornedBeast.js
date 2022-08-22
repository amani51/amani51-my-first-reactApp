import React from "react";

class HornedBeast extends React.Component {
  render() {
    return (
      <div>
        <h2>
           HornedBeast: {this.props.title}
        </h2>
        <img
          src={this.props.imageUrl}
          alt={this.props.title}
          title={this.props.title}
        ></img>
        <p>
            {this.props.description }
        </p>
      </div>
    );
  }

}

export default HornedBeast;