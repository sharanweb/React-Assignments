// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import { Category } from '../cmponents/category';

function App() {
  const [count,setCount] = useState(2);

  const handleChange = (value)=>{
    setCount(count+value);
  }

  const handleDouble = (value)=>{
    setCount(count*value);
  }
  if(count>=30){
    return <h4>Coumter has reached max val</h4>
  }
  return (
    <div className="App">
      <h1>sharan</h1>
      <h3>Counter:{count}</h3>
      <button onClick={()=>{
        if(count>=20){
          return;
        }
        // counter++;
        handleChange(1)   //handle called here
        console.log("updating")
      }}>Add</button>

      <button onClick={()=>{
        // counter++;
        handleChange(-1) 
        console.log("updating")
      }}>Substract</button>

      <button onClick={()=>{
        // counter++;
        handleDouble(2) 
        console.log("updating")
      }}>Double</button>
      <div className={count % 2 === 0 ? 'green' : 'red'}>Number is:{count%2===0 ? "Even": "Odd"}</div>
      
    </div>
  );
}

export default App;
