import './App.css';
import './logic.js';
import { useState } from 'react';
import React, {Component} from 'react';
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
import MaterialIcon from 'react-google-material-icons';
import UnitsTypes from './units.js';
import FromMetricImperialOptions from './FromMetricImperialOptions';
import ToMetricImperialOptions from './ToMetricImperialOptions';
import FromOptionsData from './FromOptionsData';





function CategoryOptions() {

  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('Temperature');

  const changeCategory = (inputCategory) => {
    setRadioValue(inputCategory);

    
   
  };

  const radios = [
    { value: 'Temperature', name: 'TempCatg', icon: "device_thermostat" },
    { value: 'Length', name: 'LengthCatg', icon: "square_foot" },
    { value: 'Area', name: 'AreaCatg', icon: "crop_square" },
    { value: 'Weight', name: 'WeightCatg', icon: "scale" },
    { value: 'Volume', name: 'VolCatg', icon: "view_in_ar" },
    { value: 'Currency', name: 'CurrCatg', icon: "attach_money" },
    { value: 'Time', name: 'TimeCatg', icon: "schedule" },
    { value: 'Speed', name: 'SpeedCatg', icon: "speed" },
    { value: 'Power', name: 'PowerCatg', icon: "bolt" },
    { value: 'Angle', name: 'AngleCatg', icon: "text_rotation_angleup" },
    { value: 'Data', name: 'DataCatg', icon: "leaderboard" },
    { value: 'Fuel', name: 'FuelCatg', icon: "battery_charging_full" },
  ];




  return (
    <section id="unit-conversion-options">
      <div className='d-flex justify-content-center app-font' style={{backgroundColor: "#D9D9D9"}}>
        <div className='hide-scroll' style={{overflowX: "scroll"}}>
          <ButtonGroup role='Unit Conversion Category Options Toolbar' aria-label='Unit Conversion Category Options Toolbar' className='bg-white'>
              {radios.map((radio, idx) => (
                <ToggleButton
                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
                  variant={'outline-primary'}
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => changeCategory(e.target.value)}
                  className='unit-category'
                >
                  <MaterialIcon icon={radio.icon} size={45}/>
                  <br></br>
                  {radio.value}
                  
                  
                </ToggleButton>
                
              ))}
            </ButtonGroup>     
        </div>
       
        <UnitsTypes type={radioValue} />
      </div>
    </section>
    
    )}









function Conversion(category) {


  return(
    <>
    <p></p>
    </>
  )

}






class App extends React.Component {

  

  render() {

  
    
   
    return (
    
      <>
      <header>
        <Navbar variant="dark" style={{ backgroundColor: "#3EAD17", height: "150px" }}>
          <Container style={{display: "flex", justifyContent: "center"}}>
            <Navbar.Brand className='app-font text-center' style={{fontSize: "2.5em"}}>Unit Converter</Navbar.Brand>
          </Container>
    
        </Navbar>
    
        <br></br>
    
        <CategoryOptions />
      </header>

      <main>
        <section id="from-to-conversion-elements">
          <br></br>
          <Container className='d-flex justify-content-center app-font'>
            <Row>
              <Col xs={12} md={5} className='d-flex justify-content-center'>
                <div className='convert-div d-flex justify-content-center' >
                  <div style={{flexDirection: "column", width: "100%"}}>
                    <br></br>
                    <div className='d-flex justify-content-center'>
                      <h2 className='d-flex justify-content-center convert-div-title-box text-light'>From</h2>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="imperial-metric-unit-options">
                      <FromMetricImperialOptions />
                     
                    </div>
                    <br></br>
                    <div className='d-flex justify-content-center' style={{columnGap: "40px"}}>

                    <select className='dropdown-styling'>  
                      
                      <option></option>
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
        
              <Col xs={12} md={2} className='d-flex justify-content-center'>
                
                <div className='switch-units-div'>
                  <Button>
                    <MaterialIcon icon="swap_horiz" size={55}/>
                  </Button>
                </div>
              
              </Col>
              <Col xs={12} md={5} className='d-flex justify-content-center'>
              <div className='convert-div d-flex justify-content-center' >
                  <div style={{flexDirection: "column", width: "100%"}}>
                    <br></br>
                    <div className='d-flex justify-content-center'>
                      <h2 className='d-flex justify-content-center convert-div-title-box text-light'>To</h2>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="imperial-metric-unit-options">
                        <ToMetricImperialOptions />
                    </div>
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
        </section>
      </main>
      
      <footer>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className='app-footer'>
          <p className='app-font'>Developed by <a style={{color: "#3399FF"}} href="https://github.com/cyprste2717218">@cyprste2717218</a></p>
        </div>
      </footer>
      
      </>
      
    );
  }




}

export default App;
