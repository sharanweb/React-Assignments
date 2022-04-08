// import logo from './logo.svg';
import './App.css';

function App() {

  const opearting = ["Android","Blackberry","iPhone","Windows Phone"];
  const company = ["Samsung","HTC","Micromax","Apple"];

  return(
    <div className='App'>
      <h1>Mobile Operating System</h1>
      <ul>
        {
          opearting.map((e)=>(
            <li>{e}</li>
          ))
        }
      </ul>
      <h1>Mobile Manufacturers</h1>
      <ul>
        {
          company.map((e)=>(
            <li>{e}</li>
          ))
        }
      </ul>
    </div>
  )
  
}

export default App;
