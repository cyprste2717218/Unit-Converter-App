
import {Container, Row} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import converter from '../utilities/converter';
import {type FromToUnitsOptionsInputsType} from '../types/fromToUnitsOptionsInputs';
import UnitDetailsLargeFrom from './unit-details-large-from';
import UnitDetailsLargeTo from './unit-details-large-to';
import UnitDetailsSmallFrom from './unit-details-small-from';
import UnitDetailsSmallTo from './unit-details-small-to';
import SwapDetailsButton from './swap-details-button';

const FromToUnitsOptions = ({currentUnits, categoryValue, sectionHeightSmall, sectionHeightLarge}: FromToUnitsOptionsInputsType): JSX.Element => {
	const [fromUnitDetails, setFromUnitDetails] = useState(currentUnits[0]);
	const [toUnitDetails, setToUnitDetails] = useState(currentUnits[0]);
	const [currentValue, setCurrentValue] = useState('');
	const [calculatedValue, setCalculatedValue] = useState('');
	const [previousCategoryValue, setPreviousCategoryValue] = useState(categoryValue);
	console.log(currentUnits[0]);
	console.log('Details:', fromUnitDetails, toUnitDetails, currentValue);

	useEffect(() => {
		if (previousCategoryValue !== categoryValue) {
			setPreviousCategoryValue(categoryValue);
			setFromUnitDetails(currentUnits[0]);
			setToUnitDetails(currentUnits[0]);
		}

		converter(fromUnitDetails, toUnitDetails, currentValue, setCalculatedValue, categoryValue);
	});

	return (
		<div className='from-to-unit-options' >

			<UnitDetailsLargeFrom
				type={'From'}
				title={'From'}
				options={currentUnits}
				setFromUnitDetails={setFromUnitDetails}
				fromUnitDetails={currentUnits[0]}
				result={() => {
					converter(fromUnitDetails, toUnitDetails);
				}}
				toUnitDetails={currentUnits[0]}
				setCurrentValue={setCurrentValue}
				currentValue={currentValue}
				categoryValue={categoryValue}
				sectionHeightLarge={sectionHeightLarge}
			/>

			{/* <SwapDetailsButton /> */}

			<UnitDetailsLargeTo
				type={'To'}
				title={'To'}
				options={currentUnits}
				setToUnitDetails={setToUnitDetails}
				currentValue={calculatedValue}
				calculatedValue={calculatedValue}
				categoryValue={categoryValue}
				sectionHeightLarge={sectionHeightLarge}
			/>

			<UnitDetailsSmallFrom
				type={'From'}
				title={'From'}
				options={currentUnits}
				setFromUnitDetails={setFromUnitDetails}
				result={() => {
					converter(fromUnitDetails, toUnitDetails);
				}}
				fromUnitDetails={currentUnits[0]}
				toUnitDetails={currentUnits[0]}
				setCurrentValue={setCurrentValue}
				currentValue={currentValue}
				categoryValue={categoryValue}
				sectionHeightSmall={sectionHeightSmall}
			/>
			<UnitDetailsSmallTo
				type={'To'}
				title={'To'}
				options={currentUnits}
				setToUnitDetails={setToUnitDetails}
				currentValue={calculatedValue}
				calculatedValue={calculatedValue}
				categoryValue={categoryValue}
				sectionHeightSmall={sectionHeightSmall}

			/>

		</div>
	);
};

export default FromToUnitsOptions;
