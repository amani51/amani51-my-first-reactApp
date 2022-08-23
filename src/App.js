import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Cards from "./components/data.json";
import SelectedBeast from "./components/SelectedBeast";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: {
        title: "",
        imageUrl: "",
        description: "",
      },
    };
  }

  updateState = () => {
    this.setState({
      click: {
        title: this.state.title,
        imageUrl: this.state.imageUrl,
        description: this.state.description,
      },
    });
  };

  render() {
    return (
      <body>
        <Header />
        <Main Cards={Cards} update={this.updateState} />
        <SelectedBeast
          title={this.state.click.title}
          imageUrl={this.state.click.image_url}
          description={this.state.click.description}
        />
        <Footer />
      </body>
    );
  }
}

export default App;
