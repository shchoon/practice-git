import './App.css';
import {useState} from 'react';
import Component1 from './Component1';

function App() {
  let [num, setNum] = useState(1);
  const info = {
    이름: '조성훈',
    나이: 25,
    성별: '남'
  }

  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={() => {
        setNum(num + 1);
      }} >Button</button>
      <Component1 info={info} />
    </div>
  );
}

export default App;
