import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";


/* Component Imports */
import UnitCategoryOptions from './components/unit-category-options';
import FromToUnitsOptions from './components/from-to-units-options';
import Footer from './components/footer';
import UnitConvNavbar from './components/unit-conv-navbar';


const App = () => {

  const [checked, setChecked] = useState(false);
  const [categoryValue, setCategoryValue] = useState('Temperature');
  const [currentUnits, setCurrentUnits] = useState(['Celsius', 'Farenheit', 'Kelvin']);
  


  return (
    
    <>
    <UnitConvNavbar />
    <div style={{minHeight: "88vh"}}>

   
    <br></br>
    <UnitCategoryOptions
      categoryValue={categoryValue}
      setCategoryValue={setCategoryValue}
      currentUnits={currentUnits}
      setCurrentUnits={setCurrentUnits}

    />
    
    <br></br><br></br>
    <FromToUnitsOptions

      currentUnits={currentUnits}
      categoryValue={categoryValue}
    />
    
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </div>
    <Footer />
    
    </>
    
  );
}

export default App;
