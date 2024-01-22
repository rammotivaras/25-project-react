import { useEffect, useState } from "react";



export default function RandomColor(){

  const [typeOfColor, setTypeOfColor] = useState("hex") ;
  const [color, setColor] = useState("#000000")

 const rendomColorUtility =(length)=>{
    return Math.floor(Math.random()* length)
 }

  const handleCreateRendomHexColor=()=>{
   const hex = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"] ;
   let hexColor = "#";

   for(let i=0; i<6; i++){
    hexColor += hex[rendomColorUtility(hex.length)]
   }
setColor(hexColor);
  }
  const handleCreateRendomRgbColor=()=>{
const r = rendomColorUtility(256);
const g = rendomColorUtility(256);
const b = rendomColorUtility(256);
setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(()=>{
    if(typeOfColor ==="rgb") handleCreateRendomRgbColor();
    else handleCreateRendomHexColor();
  },[])

    return (
        <div style={{width:"100vw", height:"100vh",background: color}}>
        <button onClick={()=>setTypeOfColor("hex")}>Create Hex Color</button>
        <button onClick={()=>setTypeOfColor("rgb")}>Create RGB Color</button>
           <button onClick={typeOfColor === "hex" ? handleCreateRendomHexColor :handleCreateRendomRgbColor}>Genret Rendom Color</button>
           <div style={{display:"flex",justifyContent:'center',alignItems:'center',color:"#000",fontSize:"60px",marginTop:"50px",gap:"90px",flexDirection:"column",}}>
            <h3>{typeOfColor === "rgb" ? 'RGB Color' : 'HEX Color'}</h3>
            <h1>{color}</h1>
           </div>
        </div>
    );
}