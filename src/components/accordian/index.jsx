import { useState } from "react";
import data from "./data";
 import './style.css';
 export default function Accordian(){

    const [selected, setSelected] = useState(null) ;
    const [unableMultipleSelection, setUnebleMultipleSelection] =useState(false);
    const [multiple, setMultiple] = useState([]) ;

    const handleSingleSelection = (getCurrentId)=>{
         setSelected(getCurrentId === selected ? null : getCurrentId);
    } 

    const handleMultiSelection =(getCurrentId)=>{
   
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId)
    console.log(findIndexOfCurrentId);
    if(findIndexOfCurrentId == -1) copyMultiple.push(getCurrentId)
    else copyMultiple.splice(findIndexOfCurrentId , 1) ;
      setMultiple(copyMultiple)
    }
    console.log(selected);

 

    return <div className="wrapper">
    <button onClick={()=>setUnebleMultipleSelection(!unableMultipleSelection)}> uneble Multiple Selection</button>
         <div className="accordian">
         {
            data && data.length > 0 ?  
               data.map(dataItem => <div className="item" key={dataItem.id}>
                <div className="title" onClick={unableMultipleSelection ? ()=> handleMultiSelection(dataItem.id) : ()=>handleSingleSelection(dataItem.id)}>
                    <h3>{dataItem.question}</h3>
                    <span>+</span>
                </div>
                {
                    selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? <div className="content">{dataItem.answer}</div>  : null
                }
                    
               </div>)
              : <div>No data present</div>
         }
         </div>
    </div>
 }