import React from 'react';
import { ButtonGroup, ToggleButton} from 'react-bootstrap';


const UnitCategoryOptions = ({radioValue, setRadioValue, setCurrentUnits}) => {

    const radios = [
        { name: 'Temperature', value: 1 },
        { name: 'Length', value: 2 },
        { name: 'Area', value: 3 },
        { name: 'Weight', value: 4 },
        { name: 'Volume', value: 5 },
        { name: 'Currency', value: 6 },
        { name: 'Time', value: 7 },
        { name: 'Speed', value: 8 },
        { name: 'Power', value: 9 },
        { name: 'Angle', value: 10 },
        { name: 'Data', value: 11 },
        { name: 'Fuel', value: 12 },
      ];

      /* define lists here with units for each unit category */
    
      const units = {
        'Temperature': ['Celsius', 'Farenheit', 'Kelvin'],
        'Length': ['option1', 'option2', 'option3'],
        'Area': ['option1', 'option2', 'option3'],
        'Weight': ['option1', 'option2', 'option3'],
        'Volume': ['option1', 'option2', 'option3'],
        'Currency': ['option1', 'option2', 'option3'],
        'Time': ['Seconds', 'Minutes', 'Hours', 'Days', 'Weeks', 'Months', 'Years'],
        'Speed': ['option1', 'option2', 'option3'],
        'Power': ['option1', 'option2', 'option3'],
        'Angle': ['option1', 'option2', 'option3'],
        'Data': ['option1', 'option2', 'option3'],
        'Fuel': ['option1', 'option2', 'option3']

      }



    return (
        <div className='d-flex justify-content-center' style={{backgroundColor: '#D9D9D9', overflowX: 'scroll'}}>
        <ButtonGroup className='bg-white'>
            {radios.map((radio, idx) => (
                <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type='radio'
                    variant={'outline-primary'}
                    name='radio'
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={event => {
                       
                        setRadioValue(event.currentTarget.value)
                        setCurrentUnits(units[radio.name])
                    }}
                    className='unit-category'
                >
                    {radio.name}
                    <br></br>

                </ToggleButton>

            ))}
        </ButtonGroup>
    </div>
    )

};

export default UnitCategoryOptions;
