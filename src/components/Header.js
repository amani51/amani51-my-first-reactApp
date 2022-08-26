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
      <header style={{height:"100px",display:"flex",justifyContent:"center"}}>
        <h1 style={{textAlign:"center","align-self":"center",color:"whitesmoke", border:"2px solid white","border-radius":"15px", padding:"10px","margin-top":"rem"}}>Welcome to Horns Beast world</h1>
      </header>
    );
  }
}

export default Header;
