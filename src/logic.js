function convert(fromValue, fromValueUnits, toValue, toValueUnits) {

    

    const conversions = {
        "Temperature": {
            
            "CelsiusFarenheit": (fromValue * 9/5) + 32,
            "FarenheitCelsius": (fromValue - 32) / (9/5), 
            "CelsiusKelvin": fromValue + 273.15,
            "KelvinCelsius": fromValue - 273.15,
            "FarenheitKelvin": conversions["Temperature"]["FarenheitCelsius"] + 273.15,
            "KelvinFarenheit": (toValue * (9/5)) - 459.67

        },

        "Length": {

            "Imperial": {},
            "Metric": {}

        },

        "Area": {
            
            "Imperial": {},
            "Metric": {}

        },

        "Weight": {

            "Imperial": {},
            "Metric": {}

        },

        "Volume": {

            "Imperial": {},
            "Metric": {}

        },

        "Currency": {

            "Imperial": {},
            "Metric": {}

        },

        "Time": {

            "Imperial": {},
            "Metric": {}

        },

        "Speed": {

            "Imperial": {},
            "Metric": {}

        },

        "Power": {

            "Imperial": {},
            "Metric": {}
            
        },

        "Angle": {

            "Imperial": {},
            "Metric": {}

        },

        "Data": {

            "Imperial": {},
            "Metric": {}

        },

        "Fuel": {

            "Imperial": {},
            "Metric": {}

        }




    }



    console.log(conversions["Temperature"][0]);



}

export default convert;