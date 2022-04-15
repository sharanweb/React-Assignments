// import logo from './logo.svg';
import { useState } from "react";
import './App.css';

function App() {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens: 20,
  });
    // Create add and remove functions here that changes the
    // state.
  
  const handleInv = (item, oldValue, value) => {
    
    if (oldValue + value < 0) {
        return;
    }
    
    else if (item === "books") {
      setInv({ ...inv, books: oldValue + value });
    } else if (item === "notebooks") {
      setInv({ ...inv, notebooks: oldValue + value });
    } else if (item === "pens") {
      setInv({ ...inv, pens: oldValue + value });
    } else if (item === "inkpens") {
      setInv({ ...inv, inkpens: oldValue + value });
    }

  }
  return (
    <div className="App">

      <div className='items'>
        <span>Books  :</span>
        <button className='addBook' onClick={() => {
          handleInv("books", inv.books, 1)
        }}>+</button>
        <button className='remBook' onClick={() => {
          handleInv("books", inv.books, -1)
        }}>-</button>
        <span className='totalBooks'>{inv.books}</span>
      </div>

      <div className='items'>
      <span>Pens     :</span>
        <button className='addPen' onClick={() => {
          handleInv("pens", inv.pens, 1)
        }}>+</button>
        <button className='remPen' onClick={() => {
          handleInv("pens", inv.pens, -1)
        }}>-</button>
        <span className='totalPens'>{inv.pens}</span>
      </div>

      <div className='items'>
      <span>NoteBooks:</span>
        <button className='addNoteBook' onClick={() => {
          handleInv("notebooks", inv.notebooks, 1)
        }}>+</button>
        <button className='remNoteBook' onClick={() => {
          handleInv("notebooks", inv.notebooks, -1)
        }}>-</button>
        <span className='totalNoteBooks'>{inv.notebooks}</span>
      </div>

      <div className='items'>
      <span>InkPens :</span>
        <button className='addInkPen' onClick={() => {
          handleInv("inkpens", inv.inkpens, 1)
        }}>+</button>
        <button className='remInkPen' onClick={() => {
          handleInv("inkpens", inv.inkpens, -1)
        }}>-</button>
        <span className='totalInkPens'>{inv.inkpens}</span>
      </div>

      <div className="total">{inv.books + inv.notebooks+inv.pens+inv.inkpens}</div>
      
    </div>
  );
}

export default App;
