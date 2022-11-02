import './App.css';
import QuoteBox from "./Components/QuoteBox/QuoteBox";
import {useState} from "react";

function App() {

  const [pastelColor, setPastelColor] = useState('');

  return (
    <div className="App" style={{backgroundColor: pastelColor}}>
      <QuoteBox pastelColor={pastelColor} setPastelColor={setPastelColor}/>
      <p>By SlothSan!</p>
    </div>
  );
}

export default App;
