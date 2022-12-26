import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Row, Col, ButtonGroup} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Dropdown from 'react-bootstrap/Dropdown';


{/*Material UI Logo Imports */}
import { ThermostatIcon, SquareFootIcon, CropIcon, ScaleIcon, ScienceIcon, CurrencyExchangeIcon, AccessTimeFilledIcon, SpeedIcon, PowerIcon, ExploreIcon, BarChartIcon, LocalGasStationIcon} from '@mui/icons-material';


function App() {

  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Temperature', value: '1' },
    { name: 'Length', value: '2' },
    { name: 'Area', value: '3' },
    { name: 'Weight', value: '4' },
    { name: 'Volume', value: '5' },
    { name: 'Currency', value: '6' },
    { name: 'Time', value: '7' },
    { name: 'Speed', value: '8' },
    { name: 'Power', value: '9' },
    { name: 'Angle', value: '10' },
    { name: 'Data', value: '11' },
    { name: 'Fuel', value: '12' },
  ];

  return (
    
    <>
    <Navbar variant="dark" style={{ backgroundColor: "#3EAD17", height: "150px" }}>
      <Container style={{display: "flex", justifyContent: "center"}}>
       <p className='navbar-text'>Unit Converter</p>
      </Container>

    </Navbar>
    <br></br>
    <div className='d-flex justify-content-center' style={{backgroundColor: "#D9D9D9", overflowX: "scroll"}}>
      <ButtonGroup className='bg-white'>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={'outline-primary'}
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
              className='unit-category'
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
    </div>
    
    <br></br>
    <Container className='d-flex justify-content-center'>
      <Row>
        <Col xs={12} md={5} className='d-flex justify-content-center'>
          <div className='convert-div d-flex justify-content-center' >
            <div style={{flexDirection: "column", width: "100%"}}>
              <br></br>
              <div className='d-flex justify-content-center header-box'>
                <div className='d-flex justify-content-center convert-div-title-box text-light'>From</div>
              </div>
              <br></br>
              <br></br>
              <div className='d-flex justify-content-center' style={{columnGap: "40px"}}>
                <select className='dropdown-styling'>
                  <option>Option1</option>
                </select>
                <input type="text"></input>
              </div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </div>
          </div>
        </Col>
        
        <Col xs={12} md={2} className='d-flex justify-content-center mt-auto mb-auto'>
          <div className='switch-units-div'>
            Swap
          </div>
        
        </Col>
        <Col xs={12} md={5} className='d-flex justify-content-center'>
        <div className='convert-div d-flex justify-content-center' >
            <div style={{flexDirection: "column", width: "100%"}}>
              <br></br>
              <div className='d-flex justify-content-center header-box'>
                <div className='d-flex justify-content-center convert-div-title-box text-light'>To</div>
              </div>
              <br></br>
              <br></br>
              <div className='d-flex justify-content-center' style={{columnGap: "40px"}}>
                <select className='dropdown-styling'>
                  <option>Option1</option>
                </select>
                <input type="text"></input>
              </div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </div>
          </div>
        
        </Col>
      </Row>
    </Container>
    
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className='footer'></div>
    
    </>
    
  );
}

export default App;
