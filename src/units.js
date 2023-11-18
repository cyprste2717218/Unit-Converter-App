import React from 'react';
import './App.js';
import FromMetricImperialOptions from './FromMetricImperialOptions';
import ToMetricImperialOptions from './ToMetricImperialOptions';
import FromOptionsData from './FromOptionsData';


export default function UnitsTypes(props) {

    const unitTypes = [

        { 'Temperature': {
            'Metric': ['Celsius', 'value2'],
            'Imperial': ['Farenheit', 'value3']
        }
    
        }


    ]

    const { type } = props;
    let metricUnits;
    let imperialUnits;
  

    const matchingUnitType = unitTypes.find(unitType => unitType.hasOwnProperty(type));
   

    if (matchingUnitType) {
      metricUnits = matchingUnitType[type].Metric;
      imperialUnits = matchingUnitType[type].Imperial;
    
     
    }


    return (

        
        
        <>
        
     
        
        
        
    
            
  
        </>

    );



} 


