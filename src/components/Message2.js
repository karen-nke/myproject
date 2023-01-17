//Create Class Component 
import {Component} from "react";

class Message2 extends Component{ //Inherit from the Component Class 
    //Every class component need to have render() method that could return HTML 

    render(){
        return <h1>Message code: {this.props.messagecode} Message: {this.props.messagecontent}</h1> //Must use this for class component 
    }

}

export default Message2;