//JS Component name always start with Capital Letter
//Creating Functional Component 

const name ="Karen"
const displayMessage =() =>{
    return "This is a messsage from"
}
function Hello(){
    return <h1>Hello World. {displayMessage()} {name}.</h1> //Return with HTML
}
//Component was created 
//Make sure to add that component to the main interface (App.js) 

//Using ES6 syntax 
//const Hello = () => <h1>Hello There</h1>

//Export the component and add it to App.js 
export default Hello; //default =  import in any file and give any name 
