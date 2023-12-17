import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScrewdriverWrench, faBars  } from '@fortawesome/free-solid-svg-icons';

const UnitConvNavbar = ({handleShow}) => {
    return (
        <Navbar variant="dark" className='navbar-div'>
            <Container style={{display: "flex", justifyContent: "flex-start"}}>
                <FontAwesomeIcon className='icon-large-devices' style={{fontSize: "40px", color: "#fff", marginRight: "15px"}} icon={faScrewdriverWrench} />
                <FontAwesomeIcon onClick={handleShow} className='icon-small-devices' style={{fontSize: "40px", color: "#fff", marginRight: "15px"}} icon={faBars} />
                
                <div style={{marginTop: "10px"}}>
                    <p className='navbar-text'>Unit Converter</p>
                </div>
             
            </Container>
  
        </Navbar>
    )
}

export default UnitConvNavbar;