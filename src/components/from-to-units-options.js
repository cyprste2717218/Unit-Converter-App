import UnitDetails from "./unit-details";
import SwapDetailsButton from "./swap-details-button";
import converter from "../utilities/converter";
import { Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";

const FromToUnitsOptions = ({currentUnits, categoryValue}) => {

    const [fromUnitDetails, setFromUnitDetails] = useState(currentUnits[0]);
    const [toUnitDetails, setToUnitDetails] = useState(currentUnits[0]);
    const [currentValue, setCurrentValue] = useState(''); 
    const [calculatedValue, setCalculatedValue] = useState('')
    const [previousCategoryValue, setPreviousCategoryValue] = useState(categoryValue);
    console.log(currentUnits[0]);
    console.log("Details:", fromUnitDetails, toUnitDetails, currentValue);

    useEffect(() => {

        
    
        if (previousCategoryValue !== categoryValue) {
            setPreviousCategoryValue(categoryValue);
            setFromUnitDetails(currentUnits[0]);
            setToUnitDetails(currentUnits[0]);
        }
        
        converter(fromUnitDetails, toUnitDetails, currentValue, setCalculatedValue, categoryValue);
    })
    
    


    return (
        <div className="from-to-unit-options" >
            <UnitDetails
                title={'From'}
                options={currentUnits}
                setFromUnitDetails={setFromUnitDetails}
                result={() => converter(fromUnitDetails, toUnitDetails)}
                fromUnitDetails={currentUnits[0]}
                toUnitDetails={currentUnits[0]}
                setCurrentValue={setCurrentValue}
                categoryValue={categoryValue}
            />
            <br></br><br></br>
            {/* <SwapDetailsButton /> */}
            <br></br><br></br>
            <UnitDetails
                title={'To'}
                options={currentUnits}
                setToUnitDetails={setToUnitDetails}
                currentValue={calculatedValue}
                calculatedValue={calculatedValue}
                categoryValue={categoryValue}
            />
        </div>
    )
}

export default FromToUnitsOptions;