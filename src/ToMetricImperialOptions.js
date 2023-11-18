import React from 'react';
import { useState } from 'react';
import {Row, Col, ButtonGroup} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';

export default function ToMetricImperialOptions(props) {

    const [toSelected, setToSelected] = useState(false);
    const [toUnitOption, setToUnitOption] = useState('toImperialOn');
  
    const toMetricImperialRadios = [
      {name: 'toMetric', value: 'toMetricOn', icon: '', text: 'Metric'},
      {name: 'toImperial', value: 'toImperialOn', icon: '', text: 'Imperial'}
    ]
  
    return (
      <ButtonGroup className='bg-white'>
        {toMetricImperialRadios.map((toOption, toUnitType) => (
          <ToggleButton
          key={toUnitType}
          id={`toMIradio-${toUnitType}`}
          type="radio"
          variant={'outline-dark'}
          name="toOption"
          value={toOption.value}
          checked={toUnitOption === toOption.value}
          onChange={(e) => setToUnitOption(e.currentTarget.value)}
          className='toMLUnitType'
          size='lg'
          >
            {toOption.text}
            
          
          </ToggleButton>
  
        ))}
      </ButtonGroup>
  
    
    )
  
  
  }