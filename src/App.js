import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello' //Import Hello.js component 
import Message from './components/Message'
import Message2 from './components/Message2'
import Profile from './components/Profile'

function App() {
  return (
    <div className="App">
      <Hello/>
      <Message/>

      <Profile name="Karen" lastname="Ng">
        <h3>This is the profile</h3>
      </Profile>
      <Profile name="Karenn" lastname="Ngg"/>
      
      <Message2 messagecode="10" messagecontent="This is a message from props"/>
    </div>
  );
}

export default App;
