import logo from './logo.svg';
import './App.css';

function App() {
  const name="Harshit"
  const handleNameChange=()=>{
    const name=['bob','Kevin','Dave']
    const intt =Math.floor(Math.random()*3);
    return name[intt]
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hello {handleNameChange()}
        </p>
        </header>
    </div>
  );
}

export default App;
