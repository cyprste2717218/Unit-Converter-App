import UnitDetails from "./unit-details";
import SwapDetailsButton from "./swap-details-button";
import { Container, Row } from "react-bootstrap";
import { useState } from "react";

const FromToUnitsOptions = ({currentUnits}) => {

    const [fromUnitDetails, setFromUnitDetails] = useState('');
    const [toUnitDetails, setToUnitDetails] = useState('');

    return (
        <Container className='d-flex justify-content-center'>
            <Row>
                <UnitDetails
                    title={'From'}
                    options={currentUnits}

                
                />
                <SwapDetailsButton />
                <UnitDetails
                    title={'To'}
                    options={currentUnits}
                
                />
            </Row>
        </Container>
    )
}

export default FromToUnitsOptions;