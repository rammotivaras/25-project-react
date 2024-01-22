import { useState } from "react";

    //    items = [] ;
// eslint-disable-next-line react/prop-types
const Erray = ({items, heading, onSelectItem}) => {
   const [selectedIndex, setSelectedIndex] = useState(-1);

   
//    const handleClick = (event)=>{
//     console.log(event)
//    }
  
   

  return (
<>
  <div>{heading}</div><br/>
  {/* { items.length === 0 ? <p>No items found</p> : null} */}
  {/* {items.length === 0 && <p>No Items found</p>} */}
 {
    // eslint-disable-next-line react/prop-types
    items ?  items.map((item , index)=>{
        return(
           <div className="main" key={item}>
           <ol
             className={selectedIndex === index ? 'items-active' : 'items-all'}
             
               onClick={()=>{ setSelectedIndex(index);
                onSelectItem(item)}}>
                {item}
                </ol>
           </div>
        )
    })       : null
 }
</>  )
}

export default Erray ;