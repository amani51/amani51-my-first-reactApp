import React from "react"
import HornedBeast from "./HornedBeast";
import image from "./Unicorn.jpg"
class Main extends React.Component{
    render(){
        return(
            <div>
                <HornedBeast title=" UniWhale" imageUrl={image}  description="A unicorn and uniWhale nuzzling their horns"/>
            </div>
        );
    }
}

export default Main;
