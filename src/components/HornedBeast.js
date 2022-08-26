import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

class HornedBeast extends React.Component {
  
  constructor(props) {
    super(props)
}
  render() {
    return (
      <Col>
        <Card style={{ width: "18rem" ,height:"35rem","box-shadow":"10px 10px 5px gray","background-color":"rgba(223, 206, 218, 0.7)"}}>
        <Card.Title style={{ border:"3px solid white","border-radius":"15px",textAlign:"center",padding:"1rem","align-self":"center","margin-top":"1rem",backgroundColor:"whitesmoke"}} >{this.props.title}</Card.Title>
          <Card.Img
            variant="top"
            src={this.props.imageUrl}
             onClick={()=>{this.props.update(this.props.title)}}
             style={{ width: "90%" ,height:"40%",display:"flex",margin:"1rem","border-radius":"15px"}}
          />
          <Card.Body>
            
            <Card.Text style={{border:"3px solid white","border-radius":"15px",height:"10rem",textAlign:"center","align-self":"center","padding-top":"1rem",backgroundColor:"whitesmoke"}}>
              {this.props.description}
              <br/>
              <br/>
              Number of horns: {this.props.horns}🦄
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default HornedBeast;
