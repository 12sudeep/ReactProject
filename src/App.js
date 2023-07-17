import logo from "./logo.svg";
import "./App.css";
import Image from "./Image";
import Profiles from "./profiles";
import Todods from "./Todos";
import Counter from "./Counter/Counter";




function App() {
  return <><div className="topic">The new Ganga characters</div><div className="container"><Profiles />
  <Todods /></div>
  <div className="count"><Counter /></div></>
}

export default App;
