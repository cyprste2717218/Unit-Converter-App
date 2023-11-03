import UnitDetails from "./unit-details";
import SwapDetailsButton from "./swap-details-button";
import { Container, Row } from "react-bootstrap";
import { useState } from "react";

const FromToUnitsOptions = ({currentUnits}) => {

    const [fromUnitDetails, setFromUnitDetails] = useState('');
    const [toUnitDetails, setToUnitDetails] = useState('');
    console.log("Unit Details:", fromUnitDetails, toUnitDetails);
    return (
        <Container className='d-flex justify-content-center'>
            <Row>
                <UnitDetails
                    title={'From'}
                    options={currentUnits}
                    setFromUnitDetails={setFromUnitDetails}
                
                />
                <SwapDetailsButton />
                <UnitDetails
                    title={'To'}
                    options={currentUnits}
                    setToUnitDetails={setToUnitDetails}
                />
            </Row>
        </Container>
    )
}

export default FromToUnitsOptions;