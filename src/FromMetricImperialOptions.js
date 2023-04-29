import React from 'react';
import { useState } from 'react';
import {Row, Col, ButtonGroup} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';

export default function FromMetricImperialOptions(props) {
    const [fromSelected, setFromSelected] = useState(false);
    const [fromUnitOption, setFromUnitOption] = useState('fromMetricOn');
  
    const fromMetricImperialRadios = [
      {name: 'fromMetric', value: 'fromMetricOn', icon: '', text: 'Metric'},
      {name: 'fromImperial', value: 'fromImperialOn', icon: '', text: 'Imperial'}
    ]
  
    return (
      <ButtonGroup className='bg-white'>
        {fromMetricImperialRadios.map((fromOption, fromUnitType) => (
          <ToggleButton
          key={fromUnitType}
          id={`fromMIradio-${fromUnitType}`}
          type="radio"
          variant={'outline-dark'}
          name="fromOption"
          value={fromOption.value}
          checked={fromUnitOption === fromOption.value}
          onChange={(e) => setFromUnitOption(e.currentTarget.value)}
          className='fromMLUnitType'
          size='lg'
          >
            {fromOption.text}
  
          </ToggleButton>
  
        ))}
      </ButtonGroup>
   
    
    
    
    )
  
  }