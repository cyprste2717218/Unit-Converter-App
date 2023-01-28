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






function CategoryOptions() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Temperature', value: '1', icon: "device_thermostat" },
    { name: 'Length', value: '2', icon: "square_foot" },
    { name: 'Area', value: '3', icon: "crop_square" },
    { name: 'Weight', value: '4', icon: "scale" },
    { name: 'Volume', value: '5', icon: "view_in_ar" },
    { name: 'Currency', value: '6', icon: "attach_money" },
    { name: 'Time', value: '7', icon: "schedule" },
    { name: 'Speed', value: '8', icon: "speed" },
    { name: 'Power', value: '9', icon: "bolt" },
    { name: 'Angle', value: '10', icon: "text_rotation_angleup" },
    { name: 'Data', value: '11', icon: "leaderboard" },
    { name: 'Fuel', value: '12', icon: "battery_charging_full" },
  ];



  return (
    <div className='d-flex justify-content-center app-font' style={{backgroundColor: "#D9D9D9"}}>
    <section className='hide-scroll' style={{overflowX: "scroll"}}>
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
              <MaterialIcon icon={radio.icon} size={45}/>
              <br></br>
              {radio.name}
              
              
            </ToggleButton>
            
          ))}
        </ButtonGroup>     
    </section>
   
    </div>)
}

class App extends React.Component {

  // Constructor 
  constructor(props) {
    super(props);

    this.state = {
        response: [],
        
    };
  }


  render() {


    
   
    return (
    
      <>
      <Navbar variant="dark" style={{ backgroundColor: "#3EAD17", height: "150px" }}>
        <Container style={{display: "flex", justifyContent: "center"}}>
         <p className='navbar-text app-font text-center'>Unit Converter</p>
        </Container>
  
      </Navbar>
      <br></br>
  
      <CategoryOptions />

      <br></br>
      <Container className='d-flex justify-content-center app-font'>
        <Row>
          <Col xs={12} md={5} className='d-flex justify-content-center'>
            <div className='convert-div d-flex justify-content-center' >
              <div style={{flexDirection: "column", width: "100%"}}>
                <br></br>
                <div className='d-flex justify-content-center'>
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
      <div className='footer'>
        <p className='app-font'>Developed by <a style={{color: "#3399FF"}} href="https://github.com/cyprste2717218">@cyprste2717218</a></p>
      </div>
      
      </>
      
    );
  }




}

export default App;
