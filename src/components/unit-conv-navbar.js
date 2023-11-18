import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';

const UnitConvNavbar = () => {
    return (
        <Navbar variant="dark" className='navbar-div'>
            <Container style={{display: "flex", justifyContent: "center"}}>
                <FontAwesomeIcon style={{fontSize: "40px", color: "#fff", marginRight: "15px"}} icon={faScrewdriverWrench} />
                <div style={{marginTop: "10px"}}>
                    <p className='navbar-text'>Unit Converter</p>
                </div>
             
            </Container>
  
        </Navbar>
    )
}

export default UnitConvNavbar;