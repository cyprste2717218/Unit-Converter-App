import { ThermostatIcon, SquareFootIcon, CropIcon, ScaleIcon, ScienceIcon, CurrencyExchangeIcon, AccessTimeFilledIcon, SpeedIcon, PowerIcon, ExploreIcon, BarChartIcon, LocalGasStationIcon} from '@mui/icons-material';import './App.css';
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

/* Component Imports */
import UnitCategoryOptions from './components/unit-category-options';
import FromToUnitsOptions from './components/from-to-units-options';



const App = () => {

  const [checked, setChecked] = useState(false);
  const [categoryValue, setCategoryValue] = useState('Temperature');
  const [currentUnits, setCurrentUnits] = useState(['Celsius', 'Farenheit', 'Kelvin', 'Rankine', 'Réaumur', 'Newton', 'Rømer', 'Delisle', 'Leiden', 'Wedgwood', 'Gas mark']);
  


  return (
    
    <>
    <Navbar variant="dark" style={{ backgroundColor: "#3EAD17", height: "150px" }}>
      <Container style={{display: "flex", justifyContent: "center"}}>
       <p className='navbar-text'>Unit Converter</p>
      </Container>

    </Navbar>
    <br></br>
    <UnitCategoryOptions

      categoryValue={categoryValue}
      setCategoryValue={setCategoryValue}
      currentUnits={currentUnits}
      setCurrentUnits={setCurrentUnits}

    />
    
    <br></br>
    <FromToUnitsOptions

      currentUnits={currentUnits}
    
    />
    
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className='footer'></div>
    
    </>
    
  );
}

export default App;
