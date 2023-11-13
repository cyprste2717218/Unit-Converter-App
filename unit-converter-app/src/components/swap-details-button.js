import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotate } from '@fortawesome/free-solid-svg-icons';
const SwapDetailsButton = () => {

    return (
        <Col className='d-flex justify-content-center mt-auto mb-auto swap-details-btn'>
            <div className='switch-units-div'>
                <FontAwesomeIcon id='switch-units-icon' icon={faRotate}  />
            </div>
        </Col>
    )
}

export default SwapDetailsButton;