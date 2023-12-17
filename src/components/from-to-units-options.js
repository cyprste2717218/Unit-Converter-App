import UnitDetailsLarge from "./unit-details-large";
import UnitDetailsSmall from "./unit-details-small";
import SwapDetailsButton from "./swap-details-button";
import converter from "../utilities/converter";
import { Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";

const FromToUnitsOptions = ({ currentUnits, categoryValue, sectionHeightSmall, sectionHeightLarge }) => {

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


            <UnitDetailsLarge
                title={'From'}
                options={currentUnits}
                setFromUnitDetails={setFromUnitDetails}
                result={() => converter(fromUnitDetails, toUnitDetails)}
                fromUnitDetails={currentUnits[0]}
                toUnitDetails={currentUnits[0]}
                setCurrentValue={setCurrentValue}
                categoryValue={categoryValue}
                sectionHeightLarge={sectionHeightLarge}
            />

            {/* <SwapDetailsButton /> */}

            <UnitDetailsLarge
                title={'To'}
                options={currentUnits}
                setToUnitDetails={setToUnitDetails}
                currentValue={calculatedValue}
                calculatedValue={calculatedValue}
                categoryValue={categoryValue}
                sectionHeightLarge={sectionHeightLarge}
            />


            <UnitDetailsSmall
                title={'From'}
                options={currentUnits}
                setFromUnitDetails={setFromUnitDetails}
                result={() => converter(fromUnitDetails, toUnitDetails)}
                fromUnitDetails={currentUnits[0]}
                toUnitDetails={currentUnits[0]}
                setCurrentValue={setCurrentValue}
                categoryValue={categoryValue}
                sectionHeightSmall={sectionHeightSmall}
            />
            <UnitDetailsSmall
                title={'To'}
                options={currentUnits}
                setToUnitDetails={setToUnitDetails}
                currentValue={calculatedValue}
                calculatedValue={calculatedValue}
                categoryValue={categoryValue}
                sectionHeightSmall={sectionHeightSmall}

            />


        </div>
    )
}

export default FromToUnitsOptions;