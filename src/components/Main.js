import React from "react"
import HornedBeast from "./HornedBeast";
import image from "./Unicorn.jpg"
import image2 from "./wholesale-halloween-costume-prop-unicorn.jpg"
class Main extends React.Component{
    render(){
        return(
            <div>
                <HornedBeast title=" UniWhale" imageUrl={image}  description="A unicorn and uniWhale nuzzling their horns"/>
                <HornedBeast title=" Unicorn Head" imageUrl={image2}  description="Someone wearing a very silly unicorn head mask"/>
            </div>
        );
    }
}

export default Main;
