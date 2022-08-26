import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer style={{height:"100px",display:"flex",justifyContent:"center"}}>
        <author style={{textAlign:"center","align-self":"center",color:"whitesmoke", padding:"10px","margin-top":"rem"}}> Copyright &copy; 2022 by Amani AL-Zoubi</author>
      </footer>
    );
  }
}

export default Footer;
