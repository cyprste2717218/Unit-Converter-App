import React from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartArea, faClock, faFlask, faGaugeHigh, faRulerCombined, faWeightScale, faTemperatureHalf, faWeightHanging, faBolt, faAngleRight, faServer, faGasPump } from '@fortawesome/free-solid-svg-icons';

const UnitCategoryOptions = ({categoryValue, setCategoryValue, setCurrentUnits}) => {


    
    const handleClick = (option) => {
        setCategoryValue(option.name)
        setCurrentUnits(units[option.name])
    }

    const UnitOption = ({option}) => {
        return (
            <Col className='unit-option' onClick={() => 
                handleClick(option)}
                xs={4} sm={2} md={2} lg={1}  style={{
                    backgroundColor: option.name === categoryValue ? '#496ABF' : '#fff',
                    color: option.name === categoryValue ? '#fff' : '#000',
                    border: option.name === categoryValue ? "1px solid #496ABF" : "1px solid #000"
                }}>
                <FontAwesomeIcon icon={option.icon} size='lg' style={{fontSize: '30px', marginBottom: '10px'}} />
                {option.name}
            </Col>  
        )
    }

    const options = [
        { name: 'Temperature', value: 1, icon: faTemperatureHalf },
        { name: 'Length', value: 2, icon: faRulerCombined },
        { name: 'Area', value: 3, icon: faChartArea },
        { name: 'Weight', value: 4, icon: faWeightScale },
        { name: 'Volume', value: 5, icon: faFlask },
        { name: 'Pressure', value: 6, icon: faWeightHanging },
        { name: 'Time', value: 7, icon: faClock },
        { name: 'Speed', value: 8, icon: faGaugeHigh },
        { name: 'Power', value: 9, icon: faBolt },
        { name: 'Angle', value: 10, icon: faAngleRight },
        { name: 'Data', value: 11, icon: faServer },
        { name: 'Fuel', value: 12, icon: faGasPump },
      ];

      /* define lists here with units for each unit category */
    
      const units = {
        'Temperature': ['Celsius', 'Farenheit', 'Kelvin'],
        'Length': ['Meter', 'Kilometer', 'Centimeter', 'Millimeter', 'Inch', 'Foot', 'Yard', 'Mile', 'Nautical Mile','Nanometre'],
        'Area': ['Square Metre', 'Square Kilometer', 'Square Inch', 'Square Foot', 'Square Yard', 'Square Mile', 'Acre', 'Hectare'],
          'Weight': ['Tonne', 'Kilogram', 'Gram', 'Miligram', 'Microgram', 'Imperial Ton', 'US Ton', 'Stone', 'Pound', 'Ounce'],
          'Volume': ['US liquid gallon', 'US liquid quart', 'US liquid pint', 'US legal cup', 'Fluid ounce', 'US tablespoon', 'US teaspoon', 'Cubic meter', 'Liter', 'Milliliter', 'Imperial gallon', 'Imperial quart', 'Imperial pint', 'Imperial cup', 'Imp. fluid ounce', 'Imperial tablespoon', 'Imperial teaspoon', 'Cubic foot', 'Cubic inch'],
          'Pressure': ['Bar', 'Pascal', 'Pound per square inch', 'Standard atmosphere', 'Torr'],
          'Time': ['Nanosecond', 'Microsecond', 'Millisecond', 'Second', 'Minute', 'Hour', 'Day', 'Week', 'Month', 'Calendar year', 'Decade', 'Century'],
          'Speed': ['Mile per hour', 'Foot per second', 'Meter per second', 'Kilometer per hour', 'Knot'],
          'Power': ['Joule', 'Kilojoule', 'Gram calorie', 'Kilocalorie', 'Watt hour', 'Kilowatt hour', 'Electronvolt', 'British thermal unit', 'US therm', 'Foot-pound'],
          'Angle': ['Arcsecond', 'Degree', 'Gradian', 'Milliradian', 'Minute of arc', 'Radian'],
          'Data': ['Bit', 'Kilobit', 'Kibibit', 'Megabit', 'Mebibit', 'Gigabit', 'Gibibit', 'Terabit', 'Tebibit', 'Petabit', 'Pebibit', 'Byte', 'Kilobyte', 'Kibibyte', 'Megabyte', 'Mebibyte', 'Gigabyte', 'Gibibyte', 'Terabyte', 'Tebibyte', 'Petabyte', 'Pebibyte'],
          'Fuel': ['Miles per gallon', 'Miles per gallon (Imperial)', 'Kilometer per liter', 'Liter per 100 kilometers']

      }

      const UnitConverterOptions =  options.map((option, idx) => (
        <UnitOption option={option} />
            ))



    return (
        <div  style={{backgroundColor: '#D9D9D9', overflowX: "scroll", display: "flex", flexDirection: "row"}}>
            
        {UnitConverterOptions}

        </div>
    )


};


export default UnitCategoryOptions;
