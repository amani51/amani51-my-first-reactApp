import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Cards from "./components/data.json";
import SelectedBeast from "./components/SelectedBeast";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Beast:{},
      show:false, 
    };
  }

  updateState = (horns) => {
    const horn=Cards.find(beast=>beast.horns===horns);
    this.setState({
      show:true ,
      Beast:horn
    });
    
    
  };
  handleClose=()=>{
    this.setState({
      show:false
    })
  }
  
  render() {
    return (
      <body>
        <Header />
        <Main Cards={Cards} update={this.updateState} />
        <SelectedBeast
          // title={Cards.title}
          // imageUrl={Cards.image_url}
          // description={Cards.description}
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
