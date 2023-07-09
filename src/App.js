import logo from './logo.svg';
import './App.css';

function App() {
  const clickFunction = () => {
    alert("you clicked me!");
  };

  return (
    <div className="App">
      Sudeep Fullel
      <div><button onClick={clickFunction}>Click me</button></div>
    </div>
  );
}

export default App;
