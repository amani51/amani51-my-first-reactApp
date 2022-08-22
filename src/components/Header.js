import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click:""
    };
  }


  message = () => {
    this.setState({
      Click: alert(`Welcome to Horned Beasts page`),
    });
  }
  render() {
    return (
      <header onClick={this.message}>
        <h1>Welcome to my first React App !!</h1>
      </header>
    );
  }
}

export default Header;
