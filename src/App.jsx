// import Accordian from './components/accordian' ;

import './App.css' ;
import CrudApplication from './components/crud/CrudApplication';
// import Erray from './components/arrey';
// import RegistretionForm from './components/registretion';
// import { UseState } from './components/useState';
// import Login from './components/form/Login';
// import FormikUser from './components/formik';
// import RandomColor from './components/accordian/rendem-color';

const App = () => {

//  let items = ['india', 'japan','america','china','russia','pakistan','canada','austrelia'];
 
//   const handleSelectItem = (item)=>{
//     console.log(item);
//   }
  
  return (
    <div className='App'>
      {/* <Accordian /> */}

      {/* rendom color component */}
      {/* <RandomColor/> */}
      {/* <UseState/> */}
      {/* <Login /> */}
      {/* <FormikUser/> */}
      {/* <RegistretionForm/> */}
  {/* <Erray items={items} heading='country' onSelectItem={handleSelectItem}/> */}

<CrudApplication/>
    </div>
  )
}

export default App