// import { useState } from "react";


// export const UseState = () => {
//   const [employee, setEmployee] = useState({name:"",country:""});

//   const handleClick=(e)=>{
//   }

//   return (
//     <div>
//     <input type="text" value={employee.name} onChange={(e)=>setEmployee({...employee,name:e.target.value})} />
//     <input type="text" value={employee.country} onChange={(e)=>setEmployee({...employee,country:e.target.value})} />
//     <button onClick={handleClick}>Click</button>
//      <div>
//      <p>my Name Is: {employee.name}</p>
//      <p>i am From: {employee.country}</p>
//      </div>
//    <div>
//     <p>{JSON.stringify(employee)}</p>
//    </div>
//     </div>
//   );
// };

// import { useState } from "react";

// export const UseState = () => {
//   const [items, setItems] = useState([]);

//   console.log(items);

//   const handleClick = () => {
//     setItems([
//       ...items,
//       {
//         id: items.length,
//         value: Math.floor(Math.random() * 100) // Fix the syntax error here
//       }
//     ]);
//   };

//   return (
//     <div style={{display:"flex", alignItems:'center',justifyContent:"center",backgroundColor:"#655129",height:"500px"}}>
//       <ul style={{display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",flexDirection:"column"}} > {/* Corrected: Use ul for the list */}
//         {items.map((item) => (
//           <li key={item.id}>{item.value}</li> 
//         ))}
//       </ul>
//       <button style={{marginTop:'20px',alignItems:"center"}} onClick={handleClick}>Click me</button> {/* Corrected: Move the button outside the map function */}
//     </div>
//   );
// };

// import { useState } from "react";

// export const UseState= ()=>{
  
//    const handleClick =()=>{
//     setValues({...values,firstName:"manoj" })
//    }
//   const [values,setValues] =useState({firstName:"ram", lastName:"motivaras"})
//   return(
//     <div>
//       <h2>my firstName is {values.firstName} and my lastName is {values.lastName}</h2>
//       <button onClick={handleClick}>click me</button>
//     </div>
//   )

// }



// import { useState } from "react";
// export const UseState =()=>{
  
//   const [name,setName] = useState('ramji')
 
//   const handleChangeName=()=>{
//     setName('kanji');
//   }
   
//   return (
//     <div>
//       <h3>{name}</h3>
//       <button onClick={handleChangeName}>click me</button>
//     </div>
//   )
// }