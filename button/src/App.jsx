import './App.css';
import { Button } from './components/button';
import { useState } from 'react';


function App() {

 const [theme, setTheme] = useState("light");
 
 return (
   <div className='App'>
      <Button theme={theme} onClick={()=>{
        setTheme(theme === "light" ?"dark" :"light")
          }}>
            Change Color
      </Button>

     </div>
 )
}

export default App;
