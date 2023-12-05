const ResultDisplay = ({ currentValue, calculatedValue, fromUnitDetails, toUnitDetails }) => {
    return (
        <>
            <p>Result: {currentValue} {fromUnitDetails} = {calculatedValue} {toUnitDetails}</p>
        </>
    )
}

export default ResultDisplay;