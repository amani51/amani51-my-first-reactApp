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
    };
  }

  updateState = (title) => {
    const beastName = Cards.find((beast) => beast.title === title);

    this.setState({
      show: true,
      Beast: beastName,
    });
  };
  eventHappened = (event) => {
    event.preventDefault()
    let Horns = event.target.value;
    console.log(Horns)
    const beastNum = Cards.filter(( horns ) => horns.horns == Horns);
    console.log(beastNum)
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
      <body>
        <Header />
        <Form.Group className="mb-3">
          <Form.Label>Filter</Form.Label>
          <Form.Select onClick={this.eventHappened}>
            <option value="">-Please choose an option-</option>
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
      </body>
    );
  }
}

export default App;
