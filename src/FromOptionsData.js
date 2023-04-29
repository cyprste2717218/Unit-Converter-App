import React from 'react';
import FromMetricImperialOptions from './FromMetricImperialOptions';

export default function FromOptionsData(props) {

    const {metricUnits, imperialUnits } = props;

    return (

        <>
            <FromMetricImperialOptions metric={metricUnits} imperial={imperialUnits} />
        </>
    )
}