import {Component} from "react"

class Counter extends Component{

    //To create state holder, we must use state object 

    constructor(){
        super(); //constructer need to have super method 
        //used to give access to methods and properties of a parent or sibling class.

        this.state ={
            counter: 0,
        };
    }

    increment(){
        //this.state.counter ++; 

        this.setState({ //Have to use set state method
            counter: this.state.counter +1,
        })
    }

    decrement(){
        //this.state.counter ++; 

        this.setState({ //Have to use set state method
            counter: this.state.counter -1,
        })
    }


    zero(){
        //this.state.counter ++; 

        this.setState({ //Have to use set state method
            counter: this.state.counter =0,
        })
    }


    render(){
        return (
        
        <div> 

            <h3>Count value is = {this.state.counter} </h3>

            <button onClick={()=> this.increment()}>Increment</button>
            <button onClick={()=> this.zero()}>Set Zero</button>
            <button onClick={()=> this.decrement()}>Decrement</button>
            

        </div>
        
        );
        //Make ^ this as parent element 

        
        
        

    }

}

export default Counter;