import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click:""
    };
  }

  render() {
    return (
      <header>
        <h1>Welcome to my first React App !!</h1>
      </header>
    );
  }
}

export default Header;
