import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Cards from "./components/data.json";
import SelectedBeast from "./components/SelectedBeast";
import Form from "react-bootstrap/Form";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Beast: {},
      show: false,
      newCards: Cards,
      // hornValue:0
    };
  };
  updateState = (title) => {
    const beastName = Cards.find((beast) => beast.title === title);

    this.setState({
      show: true,
      Beast: beastName,
    });
  };

  eventHappened = (event) => {
    event.preventDefault();
    let Horns = event.target.value;
    console.log("event=Horns",Horns)
    let beastNum =[];
    console.log("beastNum before",beastNum)
    if ((Horns ==0)) {
      beastNum = Cards;
    }else
    { 
      beastNum = Cards.filter((horns) => horns.horns == Horns);}
    this.setState({
      newCards: beastNum,
    });
  };

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    return (
      <div style={{"background-image":"url(https://wallpaperaccess.com/full/1155011.jpg)","background-repeat": "no-repeat","-moz-background-size":"cover", "background-size": "cover"}}>
        <Header/>
        <Form.Group className="mb-3" style={{width:"30%",display:"flex",justifyContent:"center","margin-top":"1rem"}}>
          <Form.Label style={{margin:"5px","box-sizing":" border-box" ,color:"whitesmoke","margin-left":"1rem"}}>Filter</Form.Label>
          <Form.Select onChange={this.eventHappened} style={{"margin-bottom":" 20px","box-sizing":" border-box"}}>
            <option value="0">-Please choose an option-</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="100">100</option>
          </Form.Select>
        </Form.Group>
        <Main Cards={this.state.newCards} update={this.updateState} />
        <SelectedBeast
          updateState={this.state.show}
          handleClose={this.handleClose}
          selectedOne={this.state.Beast}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
