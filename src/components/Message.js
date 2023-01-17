//Create Class Component 
import {Component} from "react";

class Message extends Component{ //Inherit from the Component Class 
    //Every class component need to have render() method that could return HTML 

    render(){
        return <h1>This is a class component</h1>
    }

}

export default Message;