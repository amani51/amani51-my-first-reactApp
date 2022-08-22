import React from "react"
import HornedBeast from "./HornedBeast";
import image from "./assets/Unicorn.jpg"
import image2 from "./assets/wholesale-halloween-costume-prop-unicorn.jpg"
import image3 from "./assets/photo-1512636618879-bbe79107e9e3.avif"
class Main extends React.Component{
    render(){
        return(
            <div>
                <HornedBeast title=" UniWhale"  imageUrl={image}  description="A unicorn and uniWhale nuzzling their horns"/>
                <HornedBeast title=" Rhino Family"  imageUrl={image3}  description="Parent rhino with two babies"/>
                <HornedBeast title=" Unicorn Head"  imageUrl={image2}  description="Someone wearing a very silly unicorn head mask"/>
            </div>
        );
    }
}

export default Main;
