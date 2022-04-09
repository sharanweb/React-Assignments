import { useState } from "react";

export const Inventory = () => {
    const [bookcount,setbookCount] = useState(2);
    const [Notebookcount,setNotebookCount] = useState(2);
    const [pencount,setpenCount] = useState(2);
    const [ipencount,setipenCount] = useState(2);
    // Create add and remove functions here that changes the
    // state.
    const handlebook = (value)=>{
        setbookCount(bookcount+value);
    }

    const handlenote = (value)=>{
        setNotebookCount(Notebookcount+value);
    }

    const handlepen = (value)=>{
        setpenCount(pencount+value);
    }

    const handleipen = (value)=>{
        setipenCount(ipencount+value);
    }
    
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books____: </span>
        <button className="circlularButton" onClick={()=>{
            handlebook(1);
            console.log("clecked");
        }}>+</button>
        <button className="circlularButton" onClick={()=>{
            handlebook(-1);
        }}>-</button>
        <span>{bookcount}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={()=>{
            handlenote(1);
        }}>+</button>
        <button className="circlularButton" onClick={()=>{
            handlenote(-1);
        }}>-</button>
        <span>{Notebookcount}</span>
      </div>
      <div className="items">
        <span>Pen_____: </span>
        <button className="circlularButton" onClick={()=>{
            handlepen(1);
        }}>+</button>
        <button className="circlularButton" onClick={()=>{
            handlepen(-1);
        }}>-</button>
        <span>{pencount}</span>
      </div>
      <div className="items">
        <span>Ink Pens_: </span>
        <button className="circlularButton" onClick={()=>{
            handleipen(1);
        }}>+</button>
        <button className="circlularButton" onClick={()=>{
            handleipen(-1);
        }}>-</button>
        <span>{ipencount}</span>
      </div>
            {/*calculate total and show it*/ 
            }
      total: {bookcount+pencount+Notebookcount+ipencount}
    </div>
  );
};