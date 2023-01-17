import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello' //Import Hello.js component 
import Message from './components/Message'
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
      
    </div>
  );
}

export default App;
