import './App.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";


/* Component Imports */
import UnitCategoryOptions from './components/unit-category-options';
import FromToUnitsOptions from './components/from-to-units-options';
import Footer from './components/footer';
import UnitConvNavbar from './components/unit-conv-navbar';

import converter from './utilities/converter';


const App = () => {

  const [checked, setChecked] = useState(false);
  const [categoryValue, setCategoryValue] = useState('Temperature');
  const [currentUnits, setCurrentUnits] = useState(['Celsius', 'Farenheit', 'Kelvin']);
  const [fromUnitDetails, setFromUnitDetails] = useState(currentUnits[0]);
  const [toUnitDetails, setToUnitDetails] = useState(currentUnits[0]);
  const [currentValue, setCurrentValue] = useState('');
  const [calculatedValue, setCalculatedValue] = useState('');
  const [previousCategoryValue, setPreviousCategoryValue] = useState(categoryValue);


  useEffect(() => {
    if (previousCategoryValue !== categoryValue) {
      setPreviousCategoryValue(categoryValue);
      setFromUnitDetails(currentUnits[0]);
      setToUnitDetails(currentUnits[0]);

    }
    converter(fromUnitDetails, toUnitDetails, currentValue, setCalculatedValue, categoryValue);



  })
  const sectionHeight = "calc(100vh - 225px)";;
  const sectionHeightSmall = "calc(100vh - 225px)";
  const sectionHeightLarge = "calc(100vh - 455px)";
  


  return (
    
    <>
      <div style={{ fontFamily: 'Montserrat' }}>
        <UnitConvNavbar />
        <div className='this' style={{ height: sectionHeight }} >


          <UnitCategoryOptions
            setCategoryValue={setCategoryValue}
            categoryValue={categoryValue}
            setCurrentUnits={setCurrentUnits}
            currentUnits={currentUnits}
            setCalculatedValue={setCalculatedValue}
            calculatedValue={calculatedValue}
            setCurrentValue={setCurrentValue}
            currentValue={currentValue}

          />


          <FromToUnitsOptions

            currentUnits={currentUnits}
            categoryValue={categoryValue}
            setFromUnitDetails={setFromUnitDetails}
            setToUnitDetails={setToUnitDetails}
            fromUnitDetails={fromUnitDetails}
            toUnitDetails={toUnitDetails}
            setCurrentValue={setCurrentValue}
            currentValue={currentValue}
            setCalculatedValue={setCalculatedValue}
            calculatedValue={calculatedValue}
            previousCategoryValue={previousCategoryValue}
            setPreviousCategoryValue={setPreviousCategoryValue}
            sectionHeightSmall={sectionHeightSmall}
            sectionHeightLarge={sectionHeightLarge}
          />


        </div>
        <Footer />

      </div>
    </>
    
  );
}

export default App;
