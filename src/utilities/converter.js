

const converter = (fromUnitDetails, toUnitDetails, currentValue, setCalculatedValue, categoryValue) => {
    
  

    const conversions = {

        "Temperature":{
            "Celsius": {
                "Farenheit": `(${currentValue}*(9/5)) + 32`,
                "Kelvin": `${currentValue} + 273.15`,
                "Celsius": `${currentValue}`
            },
            "Farenheit": {
                "Celsius": `(${currentValue} - 32)* (5/9)`,
                "Kelvin": `(${currentValue} - 32)* (5/9) + 273.15`, 
                "Farenheit": `${currentValue}`
            },
            "Kelvin": {
                "Celsius": `${currentValue} - 273.15`,
                "Farenheit": `(${currentValue} - 273.15)*(9/5) + 32`,
                "Kelvin": `${currentValue}`
            }
            
        },
        "Length": {
            "Meter": {
                "Meter": `${currentValue}`,
                "Kilometer": `${currentValue}/1000`,
                "Centimeter": `${currentValue}*100`,
                "Milimeter": `${currentValue}*1000`,
                "Inch": `${currentValue}*39.37`,
                "Foot": `${currentValue}*3.281`,
                "Yard": `${currentValue}*1.094`,
                "Mile": `${currentValue}/1609`,
                "Nanometre": `${currentValue}*(1e+9)`,
                "Nautical Mile": `${currentValue}/1852`
            },
            "Kilometer": {
                "Meter": `${currentValue}*1000`,
                "Kilometer": `${currentValue}`,
                "Centimeter": `${currentValue}*100000`,
                "Millimeter": `${currentValue}*(1e+6)`,
                "Inch": `${currentValue}*39370`,
                "Foot": `${currentValue}*3281`,
                "Yard": `${currentValue}*1094`,
                "Mile": `${currentValue}/1.609`,
                "Nanometre": `${currentValue}*(1e+12)`,
                "Nautical Mile": `${currentValue}/1.852`
            },
            "Centimeter": {
                "Meter": `${currentValue}/100`,
                "Kilometer": `${currentValue}/100000`,
                "Centimeter": `${currentValue}`,
                "Millimeter": `${currentValue}*10`,
                "Inch": `${currentValue}/2.54`,
                "Foot": `${currentValue}/30.48`,
                "Yard": `${currentValue}/91.44`,
                "Mile": `${currentValue}/160900`,
                "Nanometre": `${currentValue}*(1e+7)`,
                "Nautical Mile": `${currentValue}/185200`
            },
            "Millimeter": {
                "Meter": `${currentValue}/1000`,
                "Kilometer": `${currentValue}/(1e+6)`,
                "Centimeter": `${currentValue}/10`,
                "Millimeter": `${currentValue}`,
                "Inch": `${currentValue}/25.4`,
                "Foot": `${currentValue}/304.8`,
                "Yard": `${currentValue}/914.4`,
                "Mile": `${currentValue}/(1.609e+6)`,
                "Nanometre": `${currentValue}*(1e+6)`,
                "Nautical Mile": `${currentValue}/(1.852e+6)`
            },
            "Inch": {
                "Meter": `${currentValue}/39.37`,
                "Kilometer": `${currentValue}/39370`,
                "Centimeter": `${currentValue}*2.54`,
                "Millimeter": `${currentValue}*25.4`,
                "Inch": `${currentValue}`,
                "Foot": `${currentValue}/12`,
                "Yard": `${currentValue}/36`,
                "Mile": `${currentValue}/63360`,
                "Nanometre": `${currentValue}*(2.54e+7)`,
                "Nautical Mile": `${currentValue}/72910`
            },
            "Foot": {
                "Meter": `${currentValue}/3.281`,
                "Kilometer": `${currentValue}/3281`,
                "Centimeter": `${currentValue}*30.48`,
                "Millimeter": `${currentValue}*304.8`,
                "Inch": `${currentValue}*12`,
                "Foot": `${currentValue}`,
                "Yard": `${currentValue}/3`,
                "Mile": `${currentValue}/5280`,
                "Nanometre": `${currentValue}*(3.048e+8)`,
                "Nautical Mile": `${currentValue}/6076`
            },
            "Yard": {
                "Meter": `${currentValue}/1.094`,
                "Kilometer": `${currentValue}/1094`,
                "Centimeter": `${currentValue}*91.44`,
                "Millimeter": `${currentValue}*914.4`,
                "Inch": `${currentValue}*36`,
                "Foot": `${currentValue}*3`,
                "Yard": `${currentValue}`,
                "Mile": `${currentValue}/1760`,
                "Nanometre": `${currentValue}*(9.144e+8)`,
                "Nautical Mile": `${currentValue}/2025`
            },
            "Mile": {
                "Meter": `${currentValue}*1609`,
                "Kilometer": `${currentValue}*1.609`,
                "Centimeter": `${currentValue}*160900`,
                "Millimeter": `${currentValue}*(1.609e+6)`,
                "Inch": `${currentValue}*63360`,
                "Foot": `${currentValue}*5280`,
                "Yard": `${currentValue}*1760`,
                "Mile": `${currentValue}`,
                "Nanometre": `${currentValue}*(1.609e+12)`,
                "Nautical Mile": `${currentValue}/1.151`
            },
            "Nanometre": {
                "Meter": `${currentValue}/(1e+9)`,
                "Kilometer": `${currentValue}/(1e+12)`,
                "Centimeter": `${currentValue}/(1e+7)`,
                "Millimeter": `${currentValue}/(1e+6)`,
                "Inch": `${currentValue}/(2.54e+7)`,
                "Foot": `${currentValue}/(3.048e+8)`,
                "Yard": `${currentValue}/(9.144e+8)`,
                "Mile": `${currentValue}/(1.609e+12)`,
                "Nanometre": `${currentValue}`,
                "Nautical Mile": `${currentValue}*(1.852e+12)`
            },
            "Nautical Mile": {
                "Meter": `${currentValue}*1852`,
                "Kilometer": `${currentValue}*1.852`,
                "Centimeter": `${currentValue}*185200`,
                "Millimeter": `${currentValue}*1.852e+6`,
                "Inch": `${currentValue}*72910`,
                "Foot": `${currentValue}*6076`,
                "Yard": `${currentValue}*2025`,
                "Mile": `${currentValue}*1.151`,
                "Nanometre": `${currentValue}*(1.852e+12)`,
                "Nautical Mile": `${currentValue}`
            }

        },
        "Area":{
            "Square Metre": {
                "Square Metre": `${currentValue}`,
                "Square Kilometer": `${currentValue}/(1e+6)`,
                "Square Inch": `${currentValue}*1550`,
                "Square Foot": `${currentValue}*10.764`,
                "Square Yard": `${currentValue}*1.196`,
                "Square Mile": `${currentValue}/(2.59e+6)`,
                "Acre": `${currentValue}/4047`,
                "Hectare": `${currentValue}/10000`
            },
            "Square Kilometer": {
                "Square Metre": `${currentValue}*(1e+6)`,
                "Square Kilometer": `${currentValue}`,
                "Square Inch": `${currentValue}*(1.55e+9)`,
                "Square Foot": `${currentValue}*(1.076e+7)`,
                "Square Yard": `${currentValue}*(1.196e+6)`,
                "Square Mile": `${currentValue}/2.59`,
                "Acre": `${currentValue}*247.1`,
                "Hectare": `${currentValue}*100`
            },
            "Square Inch": {
                "Square Metre": `${currentValue}/1550`,
                "Square Kilometer": `${currentValue}/(1.55e+9)`,
                "Square Inch": `${currentValue}`,
                "Square Foot": `${currentValue}/144`,
                "Square Yard": `${currentValue}/1296`,
                "Square Mile": `${currentValue}/(4.014e+9)`,
                "Acre": `${currentValue}/(6.273e+6)`,
                "Hectare": `${currentValue}/(1.55e+7)`
            },
            "Square Foot": {
                "Square Metre": `${currentValue}/10.764`,
                "Square Kilometer": `${currentValue}/(1.076e+7)`,
                "Square Inch": `${currentValue}*144`,
                "Square Foot": `${currentValue}`,
                "Square Yard": `${currentValue}/9`,
                "Square Mile": `${currentValue}/(2.788e+7)`,
                "Acre": `${currentValue}/43560`,
                "Hectare": `${currentValue}/107600`
            },
            "Square Yard": {
                "Square Metre": `${currentValue}/1.196`,
                "Square Kilometer": `${currentValue}/(1.196e+6)`,
                "Square Inch": `${currentValue}*1296`,
                "Square Foot": `${currentValue}*9`,
                "Square Yard": `${currentValue}`,
                "Square Mile": `${currentValue}/(3.098e+6)`,
                "Acre": `${currentValue}/4840`,
                "Hectare": `${currentValue}/11960`
            },
            "Square Mile": {
                "Square Metre": `${currentValue}*(2.59e+6)`,
                "Square Kilometer": `${currentValue}*2.59`,
                "Square Inch": `${currentValue}*(4.014e+9)`,
                "Square Foot": `${currentValue}*(2.788e+7)`,
                "Square Yard": `${currentValue}*(3.098e+6)`,
                "Square Mile": `${currentValue}`,
                "Acre": `${currentValue}*640`,
                "Hectare": `${currentValue}*259`
            },
            "Acre": {
                "Square Metre": `${currentValue}*4047`,
                "Square Kilometer": `${currentValue}/247.1`,
                "Square Inch": `${currentValue}*(6.273e+6)`,
                "Square Foot": `${currentValue}*43560`,
                "Square Yard": `${currentValue}*4840`,
                "Square Mile": `${currentValue}/640`,
                "Acre": `${currentValue}`,
                "Hectare": `${currentValue}/2.471`
            },
            "Hectare": {
                "Square Metre": `${currentValue}*10000`,
                "Square Kilometer": `${currentValue}/100`,
                "Square Inch": `${currentValue}*(1.55e+7)`,
                "Square Foot": `${currentValue}*107600`,
                "Square Yard": `${currentValue}*11960`,
                "Square Mile": `${currentValue}/259`,
                "Acre": `${currentValue}*2.471`,
                "Hectare": `${currentValue}`
            }
        },
        "Weight": {},
        "Volume": {},
        "Currency": {},
        "Time": {},
        "Speed": {},
        "Power": {},
        "Angle": {},
        "Data": {},
        "Fuel": {}
      
    }

    if ((fromUnitDetails === '') && (toUnitDetails === '') && (categoryValue === '')) {

    }
    else {  
    
        if ((fromUnitDetails in conversions[categoryValue])) {
            if (currentValue !== '') {
                const result = eval(conversions[categoryValue][fromUnitDetails][toUnitDetails]);
                setCalculatedValue(result);
                console.log("Result:", result);
            }
            
        }
  
   
  

    }

       
    


}




export default converter;