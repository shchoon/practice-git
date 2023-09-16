import './App.css';
import {useState} from 'react';
import Component1 from './Component1';

function App() {
  let [num, setNum] = useState(1);
  let name = '조성훈';

  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={() => {
        setNum(num + 1);
      }} >Button</button>
      <Component1 name={name} />
    </div>
  );
}

export default App;
