

const converter = (fromUnitDetails, toUnitDetails, currentValue, setCalculatedValue, categoryValue) => {
    
    const calculateResult = () => {

    }

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
                "Millimeter": `${currentValue}*1000`,
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
        "Weight": {
            "Tonne": {
                "Tonne": `${currentValue}`,
                "Kilogram": `${currentValue}*1000`,
                "Gram": `${currentValue}*(1e+6)`,
                "Miligram": `${currentValue}*(1e+9)`,
                "Microgram": `${currentValue}*(1e+12)`,
                "Imperial Ton": `${currentValue}/1.016`,
                "US Ton": `${currentValue}*1.102`,
                "Stone": `${currentValue}*157.5`,
                "Pound": `${currentValue}*2205`,
                "Ounce": `${currentValue}*35270`
            },
            "Kilogram": {
                "Tonne": `${currentValue}/1000`,
                "Gram": `${currentValue}*1000`,
                "Miligram": `${currentValue}*(1e+6)`,
                "Microgram": `${currentValue}*(1e+9)`,
                "Imperial Ton": `${currentValue}/1016`,
                "US Ton": `${currentValue}/907.2`,
                "Stone": `${currentValue}/6.35`,
                "Pound": `${currentValue}*2.205`,
                "Ounce": `${currentValue}*35.274`,
                "Kilogram": `${currentValue}`

            },
            "Gram": {
                "Tonne": `${currentValue}/(1e+6)`,
                "Kilogram": `${currentValue}/1000`,
                "Gram": `${currentValue}`,
                "Microgram": `${currentValue}*(1e+6)`,
                "Imperial Ton": `${currentValue}/(1.016e+6)`,
                "US Ton": `${currentValue}/907200`,
                "Stone": `${currentValue}/6350`,
                "Pound": `${currentValue}/453.6`,
                "Ounce": `${currentValue}/28.35`,
                "Miligram": `${currentValue}*1000`,

            },
            "Miligram": {
                "Tonne": `${currentValue}/(1e+9)`,
                "Kilogram": `${currentValue}/(1e+6)`,
                "Gram": `${currentValue}/1000`,
                "Microgram": `${currentValue}*1000`,
                "Imperial Ton": `${currentValue}/(1.016e+9)`,
                "US Ton": `${currentValue}/(9.072e+8)`,
                "Stone": `${currentValue}/(6.35e+6)`,
                "Pound": `${currentValue}/453600`,
                "Ounce": `${currentValue}/28350`,
                "Miligram": `${currentValue}`,
            },
            "Microgram": {
                "Tonne": `${currentValue}/(1e+12)`,
                "Kilogram": `${currentValue}/(1e+9)`,
                "Gram": `${currentValue}/(1e+6)`,
                "Microgram": `${currentValue}`,
                "Imperial Ton": `${currentValue}/(1.016e+12)`,
                "US Ton": `${currentValue}/(9.072e+11)`,
                "Stone": `${currentValue}/(6.35e+9)`,
                "Pound": `${currentValue}/(4.536e+8)`,
                "Ounce": `${currentValue}/(2.835e+7)`,
                "Miligram": `${currentValue}/1000`,
            },
            "Imperial Ton": {
                "Tonne": `${currentValue}*1.016`,
                "Kilogram": `${currentValue}*1016`,
                "Gram": `${currentValue}*(1.016e+6)`,
                "Microgram": `${currentValue}*(1.016e+12)`,
                "Imperial Ton": `${currentValue}`,
                "US Ton": `${currentValue}*1.12`,
                "Stone": `${currentValue}*160`,
                "Pound": `${currentValue}*2240`,
                "Ounce": `${currentValue}*35840`,
                "Miligram": `${currentValue}*(1.016e+9)`,
            },
            "US Ton": {
                "Tonne": `${currentValue}/1.102`,
                "Kilogram": `${currentValue}*907.2`,
                "Gram": `${currentValue}*907200`,
                "Microgram": `${currentValue}*(9.072e+11)`,
                "Imperial Ton": `${currentValue}/1.12`,
                "US Ton": `${currentValue}`,
                "Stone": `${currentValue}*142.9`,
                "Pound": `${currentValue}*2000`,
                "Ounce": `${currentValue}*32000`,
                "Miligram": `${currentValue}*(9.072e+8)`,
            },
            "Stone": {
                "Tonne": `${currentValue}/157.5`,
                "Kilogram": `${currentValue}*6.35`,
                "Gram": `${currentValue}*6350`,
                "Microgram": `${currentValue}*(6.35e+9)`,
                "Imperial Ton": `${currentValue}/160`,
                "US Ton": `${currentValue}/142.9`,
                "Stone": `${currentValue}`,
                "Pound": `${currentValue}*14`,
                "Ounce": `${currentValue}*224`,
                "Miligram": `${currentValue}*(6.35e+6)`,
            },
            "Pound": {
                "Tonne": `${currentValue}/2205`,
                "Kilogram": `${currentValue}/2.205`,
                "Gram": `${currentValue}*453.6`,
                "Microgram": `${currentValue}*(4.536e+8)`,
                "Imperial Ton": `${currentValue}/2240`,
                "US Ton": `${currentValue}/2000`,
                "Stone": `${currentValue}/14`,
                "Pound": `${currentValue}`,
                "Ounce": `${currentValue}*16`,
                "Miligram": `${currentValue}*453600`,
            },
            "Ounce": {
                "Tonne": `${currentValue}/35270`,
                "Kilogram": `${currentValue}/35.274`,
                "Gram": `${currentValue}*28.35`,
                "Microgram": `${currentValue}*(2.835e+7)`,
                "Imperial Ton": `${currentValue}/35840`,
                "US Ton": `${currentValue}/32000`,
                "Stone": `${currentValue}/224`,
                "Pound": `${currentValue}/16`,
                "Ounce": `${currentValue}`,
                "Miligram": `${currentValue}*28350`,
            }
        },
        "Volume": {
            'US liquid gallon': {
                'US liquid gallon': `${currentValue}`,
                'US liquid quart': ``,
                'US liquid pint': ``,
                'US legal cup': ``,
                'Fluid ounce': ``,
                'US tablespoon': ``,
                'US teaspoon': ``,
                'Cubic meter': ``,
                'Liter': ``,
                'Milliliter': ``,
                'Imperial gallon': ``,
                'Imperial quart': ``,
                'Imperial pint': ``,
                'Imperial cup': ``,
                'Imp. fluid ounce': ``,
                'Imperial tablespoon': ``,
                'Imperial teaspoon': ``,
                'Cubic foot': ``,
                'Cubic inch': ``
            },
            'US liquid quart': {
                'US liquid gallon': ``,
                'US liquid quart': ``,
                'US liquid pint': ``,
                'US legal cup': ``,
                'Fluid ounce': ``,
                'US tablespoon': ``,
                'US teaspoon': ``,
                'Cubic meter': ``,
                'Liter': ``,
                'Milliliter': ``,
                'Imperial gallon': ``,
                'Imperial quart': ``,
                'Imperial pint': ``,
                'Imperial cup': ``,
                'Imp. fluid ounce': ``,
                'Imperial tablespoon': ``,
                'Imperial teaspoon': ``,
                'Cubic foot': ``,
                'Cubic inch': ``
            },
            'US liquid pint': {
                'US liquid gallon': ``,
                'US liquid quart': ``,
                'US liquid pint': ``,
                'US legal cup': ``,
                'Fluid ounce': ``,
                'US tablespoon': ``,
                'US teaspoon': ``,
                'Cubic meter': ``,
                'Liter': ``,
                'Milliliter': ``,
                'Imperial gallon': ``,
                'Imperial quart': ``,
                'Imperial pint': ``,
                'Imperial cup': ``,
                'Imp. fluid ounce': ``,
                'Imperial tablespoon': ``,
                'Imperial teaspoon': ``,
                'Cubic foot': ``,
                'Cubic inch': ``
            },
            'US legal cup': {
                'US liquid gallon': ``,
                'US liquid quart': ``,
                'US liquid pint': ``,
                'US legal cup': ``,
                'Fluid ounce': ``,
                'US tablespoon': ``,
                'US teaspoon': ``,
                'Cubic meter': ``,
                'Liter': ``,
                'Milliliter': ``,
                'Imperial gallon': ``,
                'Imperial quart': ``,
                'Imperial pint': ``,
                'Imperial cup': ``,
                'Imp. fluid ounce': ``,
                'Imperial tablespoon': ``,
                'Imperial teaspoon': ``,
                'Cubic foot': ``,
                'Cubic inch': ``
            },
            'Fluid ounce': {
                'US liquid gallon': ``,
                'US liquid quart': ``,
                'US liquid pint': ``,
                'US legal cup': ``,
                'Fluid ounce': ``,
                'US tablespoon': ``,
                'US teaspoon': ``,
                'Cubic meter': ``,
                'Liter': ``,
                'Milliliter': ``,
                'Imperial gallon': ``,
                'Imperial quart': ``,
                'Imperial pint': ``,
                'Imperial cup': ``,
                'Imp. fluid ounce': ``,
                'Imperial tablespoon': ``,
                'Imperial teaspoon': ``,
                'Cubic foot': ``,
                'Cubic inch': ``
            },
            'US tablespoon': {
                'US liquid gallon': ``,
                'US liquid quart': ``,
                'US liquid pint': ``,
                'US legal cup': ``,
                'Fluid ounce': ``,
                'US tablespoon': ``,
                'US teaspoon': ``,
                'Cubic meter': ``,
                'Liter': ``,
                'Milliliter': ``,
                'Imperial gallon': ``,
                'Imperial quart': ``,
                'Imperial pint': ``,
                'Imperial cup': ``,
                'Imp. fluid ounce': ``,
                'Imperial tablespoon': ``,
                'Imperial teaspoon': ``,
                'Cubic foot': ``,
                'Cubic inch': ``
            },
            'US teaspoon': {
                'US liquid gallon': ``,
                'US liquid quart': ``,
                'US liquid pint': ``,
                'US legal cup': ``,
                'Fluid ounce': ``,
                'US tablespoon': ``,
                'US teaspoon': ``,
                'Cubic meter': ``,
                'Liter': ``,
                'Milliliter': ``,
                'Imperial gallon': ``,
                'Imperial quart': ``,
                'Imperial pint': ``,
                'Imperial cup': ``,
                'Imp. fluid ounce': ``,
                'Imperial tablespoon': ``,
                'Imperial teaspoon': ``,
                'Cubic foot': ``,
                'Cubic inch': ``
            },
            'Cubic meter': {
                'US liquid gallon': ``,
                'US liquid quart': ``,
                'US liquid pint': ``,
                'US legal cup': ``,
                'Fluid ounce': ``,
                'US tablespoon': ``,
                'US teaspoon': ``,
                'Cubic meter': ``,
                'Liter': ``,
                'Milliliter': ``,
                'Imperial gallon': ``,
                'Imperial quart': ``,
                'Imperial pint': ``,
                'Imperial cup': ``,
                'Imp. fluid ounce': ``,
                'Imperial tablespoon': ``,
                'Imperial teaspoon': ``,
                'Cubic foot': ``,
                'Cubic inch': ``
            },
            'Liter': {
                'US liquid gallon': ``,
                'US liquid quart': ``,
                'US liquid pint': ``,
                'US legal cup': ``,
                'Fluid ounce': ``,
                'US tablespoon': ``,
                'US teaspoon': ``,
                'Cubic meter': ``,
                'Liter': ``,
                'Milliliter': ``,
                'Imperial gallon': ``,
                'Imperial quart': ``,
                'Imperial pint': ``,
                'Imperial cup': ``,
                'Imp. fluid ounce': ``,
                'Imperial tablespoon': ``,
                'Imperial teaspoon': ``,
                'Cubic foot': ``,
                'Cubic inch': ``
            },
            'Milliliter': {
                'US liquid gallon': ``,
                'US liquid quart': ``,
                'US liquid pint': ``,
                'US legal cup': ``,
                'Fluid ounce': ``,
                'US tablespoon': ``,
                'US teaspoon': ``,
                'Cubic meter': ``,
                'Liter': ``,
                'Milliliter': ``,
                'Imperial gallon': ``,
                'Imperial quart': ``,
                'Imperial pint': ``,
                'Imperial cup': ``,
                'Imp. fluid ounce': ``,
                'Imperial tablespoon': ``,
                'Imperial teaspoon': ``,
                'Cubic foot': ``,
                'Cubic inch': ``
            },
            'Imperial gallon': {
                'US liquid gallon': ``,
                'US liquid quart': ``,
                'US liquid pint': ``,
                'US legal cup': ``,
                'Fluid ounce': ``,
                'US tablespoon': ``,
                'US teaspoon': ``,
                'Cubic meter': ``,
                'Liter': ``,
                'Milliliter': ``,
                'Imperial gallon': ``,
                'Imperial quart': ``,
                'Imperial pint': ``,
                'Imperial cup': ``,
                'Imp. fluid ounce': ``,
                'Imperial tablespoon': ``,
                'Imperial teaspoon': ``,
                'Cubic foot': ``,
                'Cubic inch': ``
            },
            'Imperial quart': {
                'US liquid gallon': ``,
                'US liquid quart': ``,
                'US liquid pint': ``,
                'US legal cup': ``,
                'Fluid ounce': ``,
                'US tablespoon': ``,
                'US teaspoon': ``,
                'Cubic meter': ``,
                'Liter': ``,
                'Milliliter': ``,
                'Imperial gallon': ``,
                'Imperial quart': ``,
                'Imperial pint': ``,
                'Imperial cup': ``,
                'Imp. fluid ounce': ``,
                'Imperial tablespoon': ``,
                'Imperial teaspoon': ``,
                'Cubic foot': ``,
                'Cubic inch': ``
            },
            'Imperial pint': {
                'US liquid gallon': ``,
                'US liquid quart': ``,
                'US liquid pint': ``,
                'US legal cup': ``,
                'Fluid ounce': ``,
                'US tablespoon': ``,
                'US teaspoon': ``,
                'Cubic meter': ``,
                'Liter': ``,
                'Milliliter': ``,
                'Imperial gallon': ``,
                'Imperial quart': ``,
                'Imperial pint': ``,
                'Imperial cup': ``,
                'Imp. fluid ounce': ``,
                'Imperial tablespoon': ``,
                'Imperial teaspoon': ``,
                'Cubic foot': ``,
                'Cubic inch': ``
            },
            'Imperial cup': {
                'US liquid gallon': ``,
                'US liquid quart': ``,
                'US liquid pint': ``,
                'US legal cup': ``,
                'Fluid ounce': ``,
                'US tablespoon': ``,
                'US teaspoon': ``,
                'Cubic meter': ``,
                'Liter': ``,
                'Milliliter': ``,
                'Imperial gallon': ``,
                'Imperial quart': ``,
                'Imperial pint': ``,
                'Imperial cup': ``,
                'Imp. fluid ounce': ``,
                'Imperial tablespoon': ``,
                'Imperial teaspoon': ``,
                'Cubic foot': ``,
                'Cubic inch': ``
            },
            'Imp. fluid ounce': {
                'US liquid gallon': ``,
                'US liquid quart': ``,
                'US liquid pint': ``,
                'US legal cup': ``,
                'Fluid ounce': ``,
                'US tablespoon': ``,
                'US teaspoon': ``,
                'Cubic meter': ``,
                'Liter': ``,
                'Milliliter': ``,
                'Imperial gallon': ``,
                'Imperial quart': ``,
                'Imperial pint': ``,
                'Imperial cup': ``,
                'Imp. fluid ounce': ``,
                'Imperial tablespoon': ``,
                'Imperial teaspoon': ``,
                'Cubic foot': ``,
                'Cubic inch': ``
            },
            'Imperial tablespoon': {
                'US liquid gallon': ``,
                'US liquid quart': ``,
                'US liquid pint': ``,
                'US legal cup': ``,
                'Fluid ounce': ``,
                'US tablespoon': ``,
                'US teaspoon': ``,
                'Cubic meter': ``,
                'Liter': ``,
                'Milliliter': ``,
                'Imperial gallon': ``,
                'Imperial quart': ``,
                'Imperial pint': ``,
                'Imperial cup': ``,
                'Imp. fluid ounce': ``,
                'Imperial tablespoon': ``,
                'Imperial teaspoon': ``,
                'Cubic foot': ``,
                'Cubic inch': ``
            },
            'Imperial teaspoon': {
                'US liquid gallon': ``,
                'US liquid quart': ``,
                'US liquid pint': ``,
                'US legal cup': ``,
                'Fluid ounce': ``,
                'US tablespoon': ``,
                'US teaspoon': ``,
                'Cubic meter': ``,
                'Liter': ``,
                'Milliliter': ``,
                'Imperial gallon': ``,
                'Imperial quart': ``,
                'Imperial pint': ``,
                'Imperial cup': ``,
                'Imp. fluid ounce': ``,
                'Imperial tablespoon': ``,
                'Imperial teaspoon': ``,
                'Cubic foot': ``,
                'Cubic inch': ``
            },
            'Cubic foot': {
                'US liquid gallon': ``,
                'US liquid quart': ``,
                'US liquid pint': ``,
                'US legal cup': ``,
                'Fluid ounce': ``,
                'US tablespoon': ``,
                'US teaspoon': ``,
                'Cubic meter': ``,
                'Liter': ``,
                'Milliliter': ``,
                'Imperial gallon': ``,
                'Imperial quart': ``,
                'Imperial pint': ``,
                'Imperial cup': ``,
                'Imp. fluid ounce': ``,
                'Imperial tablespoon': ``,
                'Imperial teaspoon': ``,
                'Cubic foot': ``,
                'Cubic inch': ``
            },
            'Cubic inch': {
                'US liquid gallon': ``,
                'US liquid quart': ``,
                'US liquid pint': ``,
                'US legal cup': ``,
                'Fluid ounce': ``,
                'US tablespoon': ``,
                'US teaspoon': ``,
                'Cubic meter': ``,
                'Liter': ``,
                'Milliliter': ``,
                'Imperial gallon': ``,
                'Imperial quart': ``,
                'Imperial pint': ``,
                'Imperial cup': ``,
                'Imp. fluid ounce': ``,
                'Imperial tablespoon': ``,
                'Imperial teaspoon': ``,
                'Cubic foot': ``,
                'Cubic inch': ``
            }
        },
        "Pressure": {},
        "Time": {},
        "Speed": {
            'Mile per hour': {
                'Mile per hour': `${currentValue}`,
                'Foot per second': `${currentValue}*1.467`,
                'Meter per second': `${currentValue}/2.237`,
                'Kilometer per hour': `${currentValue}*1.609`,
                'Knot': `${currentValue}/1.151`
            },
            'Foot per second': {
                'Mile per hour': `${currentValue}/1.467`,
                'Foot per second': `${currentValue}`,
                'Meter per second': `${currentValue}/3.281`,
                'Kilometer per hour': `${currentValue}*1.097`,
                'Knot': `${currentValue}/1.688`
            },
            'Meter per second': {
                'Mile per hour': `${currentValue}*2.237`,
                'Foot per second': `${currentValue}*3.281`,
                'Meter per second': `${currentValue}`,
                'Kilometer per hour': `${currentValue}*3.6`,
                'Knot': `${currentValue}*1.944`
            },
            'Kilometer per hour': {
                'Mile per hour': `${currentValue}/1.609`,
                'Foot per second': `${currentValue}/1.097`,
                'Meter per second': `${currentValue}/3.6`,
                'Kilometer per hour': `${currentValue}`,
                'Knot': `${currentValue}/1.852`
            },
            'Knot': {
                'Mile per hour': `${currentValue}*1.151`,
                'Foot per second': `${currentValue}*1.688`,
                'Meter per second': `${currentValue}/1.944`,
                'Kilometer per hour': `${currentValue}*1.852`,
                'Knot': `${currentValue}`
            }
        },
        "Power": {},
        "Angle": {
            'Arcsecond': {
                'Arcsecond': `${currentValue}`,
                'Degree': `${currentValue}/3600`,
                'Gradian': `${currentValue}/3240`,
                'Milliradian': `${currentValue}*(1000*${Math.PI}/(180*3600))`,
                'Minute of arc': `${currentValue}/60`,
                'Radian': `${currentValue}*(${Math.PI}/(180*3600))`
            },
            'Degree': {
                'Arcsecond': `${currentValue}*3600`,
                'Degree': `${currentValue}`,
                'Gradian': `${currentValue}*(200/180)`,
                'Milliradian': `${currentValue}*((1000*${Math.PI})/180)`,
                'Minute of arc': `${currentValue}*60`,
                'Radian': `${currentValue}*(${Math.PI}/180)`
            },
            'Gradian': {
                'Arcsecond': `${currentValue}*3240`,
                'Degree': `${currentValue}*(180/200)`,
                'Gradian': `${currentValue}`,
                'Milliradian': `${currentValue}*((1000*${Math.PI})/200)`,
                'Minute of arc': `${currentValue}*54`,
                'Radian': `${currentValue}*(${Math.PI}/200)`
            },
            'Milliradian': {
                'Arcsecond': `${currentValue} * ((3600*180)/(1000*${Math.PI}))`,
                'Degree': `${currentValue} * (180/(1000*${Math.PI}))`,
                'Gradian': `${currentValue}* (200/(1000*${Math.PI}))`,
                'Milliradian': `${currentValue}`,
                'Minute of arc': `${currentValue}*((60*180)/(1000*${Math.PI}))`,
                'Radian': `${currentValue}/1000`
            },
            'Minute of arc': {
                'Arcsecond': `${currentValue}*60`,
                'Degree': `${currentValue}/60`,
                'Gradian': `${currentValue}/54`,
                'Milliradian': `${currentValue}* ((1000*${Math.PI})/(60*180))`,
                'Minute of arc': `${currentValue}`,
                'Radian': `${currentValue} * ((${Math.PI})/(60*180))`
            },
            'Radian': {
                'Arcsecond': `${currentValue}* ((3600*180)/${Math.PI})`,
                'Degree': `${currentValue} * (180/${Math.PI})`,
                'Gradian': `${currentValue} * (200/${Math.PI})`,
                'Milliradian': `${currentValue}/1000`,
                'Minute of arc': `${currentValue} * ((60*180)/${Math.PI})`,
                'Radian': `${currentValue}`
            }
        },
        "Data": {},
        "Fuel": {}
      
    }

    const negativeCategories = ['Temperature', 'Angle']

    if ((fromUnitDetails !== '') && (toUnitDetails !== '') && (categoryValue !== '')) {
        console.log("currentValue:", currentValue)
        if (((currentValue < 0) && ((categoryValue === negativeCategories[0]) || (categoryValue === negativeCategories[1]))) || (currentValue >= 0)) {
            if ((fromUnitDetails in conversions[categoryValue])) {
                if (currentValue !== '') {
                    const result = eval(conversions[categoryValue][fromUnitDetails][toUnitDetails]);
                    const roundedResult = Math.round((result + Number.EPSILON) * 10000) / 10000;
                    setCalculatedValue(roundedResult);
                    console.log("Result:", roundedResult);
                }

            }

        }


    }
    else {


  
   
  

    }

       
    


}




export default converter;