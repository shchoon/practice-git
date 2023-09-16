import './App.css';
import {useState} from 'react';

function App() {
  let [num, setNum] = useState(1);

  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={() => {
        setNum(num + 1);
      }} >Button</button>

      <div>{num}</div>
    </div>
  );
}

export default App;
