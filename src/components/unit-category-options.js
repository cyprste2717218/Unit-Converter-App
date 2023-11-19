import React from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartArea, faClock, faFlask, faGaugeHigh, faRulerCombined, faSterlingSign, faTemperatureHalf, faWeightHanging, faBolt, faAngleRight, faServer, faGasPump } from '@fortawesome/free-solid-svg-icons';

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
        { name: 'Weight', value: 4, icon: faWeightHanging },
        { name: 'Volume', value: 5, icon: faFlask },
        { name: 'Currency', value: 6, icon: faSterlingSign },
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
        'Volume': ['Cubic Meter', 'Cubic Centimeter', 'Cubic Millimeter', 'Cubic Inch', 'Cubic Foot', 'Cubic Yard', 'Milliliter', 'Liter', 'Kiloliter', 'Dal', 'Peck', 'Gallon', 'Barrel', 'Hogshead', 'Butt', 'Tun'],
        'Currency': ['United States Dollar (USD)', 'Euro (EUR)', 'Japanese Yen (JPY)', 'British Pound (GBP)', 'Australian Dollar (AUD)', 'Canadian Dollar (CAD)', 'Swiss Franc (CHF)', 'Chinese Yuan Renminbi (CNY)', 'Indian Rupee (INR)', 'Brazilian Real (BRL)', 'Russian Ruble (RUB)', 'Mexican Peso (MXN)'],
        'Time': ['Nanosecond (ns)', 'Microsecond (µs)', 'Millisecond (ms)', 'Second (s)', 'Minute (min)', 'Hour (h)', 'Day (d)', 'Week (wk)', 'Month (mo)', 'Year (yr)', 'Decade', 'Century', 'Millennium'],
        'Speed': ['Meters per Second (m/s)', 'Kilometers per Hour (km/h)', 'Miles per Hour (mph)', 'Feet per Second (fps)', 'Knots', 'Mach'],
        'Power': ['Watts (W)', 'Kilowatts (kW)', 'Megawatts (MW)', 'Gigawatts (GW)', 'Terawatts (TW)', 'Petawatts (PW)', 'Exawatts (EW)', 'Zettawatt (ZW)', 'Yottawatts (YW)'],
        'Angle': ['Degree (°)','Minute (′)', 'Second (″)', 'Radian (rad)', 'Gradian (grad)', 'Turn (t)', 'Revolution (rev)'],
        'Data': ['Bit', 'Byte', 'Kilobyte (KB)', 'Megabyte (MB)', 'Gigabyte (GB)', 'Terabyte (TB)', 'Petabyte (PB)', 'Exabyte (EB)', 'Zettabyte (ZB)', 'Yottabyte (YB)'],
        'Fuel': ['Gallon (gal)', 'Barrel (bbl)', 'Cubic Meter (m³)', 'Liter (L)', 'Kiloliter (KL)', 'Ton (t)', 'British Thermal Unit (BTU)', 'Joule (J)', 'Therm (thm)', 'Megawatt-hour (MWh)', 'Gigawatt-hour (GWh)', 'Terawatt-hour (TWh)', 'Petawatt-hour (PWh)']

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
