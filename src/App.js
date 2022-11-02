import './App.css';
import QuoteBox from "./Components/QuoteBox/QuoteBox";
import {useState} from "react";

function App() {

  const [pastelColor, setPastelColor] = useState('');

  return (
    <div className="App" style={{backgroundColor: pastelColor}}>
      <QuoteBox pastelColor={pastelColor} setPastelColor={setPastelColor}/>
      <p className={"created-text"}>By Mike Oram - 2022</p>
    </div>
  );
}

export default App;
