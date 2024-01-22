// import { useState } from "react";

// const CrudApplication = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [data, setData] = useState([]);
//   const [clickEdit, setClickEdit] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'name') {
//       setName(value);
//     } else if (name === 'email') {
//       setEmail(value);
//     }
//   };

//   const handleCreate = () => {
//     // Create operation
//     if (clickEdit && editIndex !== null) {
//       // Update existing item
//       const updatedData = [...data];
//       updatedData[editIndex] = { name, email };
//       setData(updatedData);

//       // Reset edit mode
//       setClickEdit(false);
//       setEditIndex(null);
//     } else {
//       // Create new item
//       const newData = [...data, { name, email }];
//       setData(newData);
//     }

//     // Clear input fields
//     setName('');
//     setEmail('');
//   };

//   const handleEdit = (item, index) => {
//     setName(item.name);
//     setEmail(item.email);
//     setClickEdit(true);
//     setEditIndex(index);
//   };

//   const handleDelete = (index) => {
//     // Delete operation
//     const updatedData = [...data];
//     updatedData.splice(index, 1);
//     setData(updatedData);
//   };

//   return (
//     <>
//       <div>CrudApplication</div>
//       <div className='main-header'>
//         <input
//           type="text"
//           placeholder="Enter Name..."
//           name="name"
//           value={name}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           placeholder="Enter Email..."
//           name="email"
//           value={email}
//           onChange={handleChange}
//         />
//         <button className='btn-i' onClick={handleCreate}>
//           {clickEdit ? "Update" : "Create"}
//         </button>
//       </div>
//       {/* Display your data */}
//       <div className="data-list">
//         <h2>Data List</h2>
//         <ul>
//           {data.map((item, index) => (
//             <li key={index}>
//               <strong>Name:</strong> {item.name}, <strong>Email:</strong> {item.email}
//               <button onClick={() => handleEdit(item, index)}>Update</button>
//               <button onClick={() => handleDelete(index)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default CrudApplication;



import {useState} from 'react'
import './CrudApplication.css';
import toast, { Toaster } from 'react-hot-toast';

const CrudApplication = () => {
    
    const [name , setName] =useState('');
    const [email , setEmail] = useState('');
    const [data ,setData] = useState([]);
    const [clickEdit, setClickEdit] = useState(false) ;
    const [editIndex, setEditIndex] = useState(null);
    
    const handleValue = (e)=>{
        
        const {name , value } = e.target ;
        if(name === "name"){
            setName(value);
        }else if(name === "email"){
            setEmail(value)
        }
};

const handleCreate = () => {
    if (clickEdit && editIndex !== null) {
      const updatedData = [...data];
      updatedData[editIndex] = { name, email };
      setData(updatedData);
      setClickEdit(false);
      setEditIndex(null);
  
      toast.success('Item updated successfully');
    } else {
      const newData = [...data, { name, email }];
      setData(newData);
  
      toast.success('Item created successfully');
    }
  
    setName('');
    setEmail('');
  };
  
  const handleDelete = (index) => {
    const updatedData = data.filter((item, idx) => idx !== index);
    setData(updatedData);
  
    toast.success('Item deleted successfully');
  };
  
  
const handleEdit = (item , index)=>{

    setName(item.name);
    setEmail(item.email);
    setClickEdit(true);
    setEditIndex(index);
}
  return (
   <>
    <div className='heading'>Crud Application</div>
    <div className='main-header'>
    <Toaster position="top-center" reverseOrder={false} />
            <input type='text' name='name' placeholder='Enter Name' value={name} onChange={handleValue} />  
            <input type='text' name='email' placeholder='Enter Email' value={email} onChange={handleValue} /> 
            <button className='btn-i' onClick={handleCreate}> {clickEdit ? "Update" : "Create"}</button> 
    </div>


  <table className='table-i'>
    <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody className='tbody'>
       {
        data.map((item,index)=>(
            <tr key={index}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>
                <button onClick={() => handleEdit(item, index)} >Edit</button>
                <button onClick={()=>handleDelete(index)}>Delete</button>
            </td>
        </tr> 
        ))
       }
    </tbody>
  </table>


   </>
    )
}

export default CrudApplication ;
