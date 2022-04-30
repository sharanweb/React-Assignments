import { useState } from 'react'

import './App.css'
import { AddRest } from "./Components/AddRest"
import { ShowRest } from './Components/ShowRest';

function App() {


  const [show ,setShow]=useState(true);
return (
<div className='App'>

{show ?<ShowRest/> :<AddRest/>}
<button className='show'
onClick={()=>{
  setShow(!show)
}}
>{show?"Add Another Restorent":"Restaurent Data"}</button>
    </div>
  )
}

export default App;
