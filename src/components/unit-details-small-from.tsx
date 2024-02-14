import {Col} from 'react-bootstrap';
import {useState, type ChangeEvent} from 'react';
import {type UnitFromSmallType} from '../types/unitDetailsType.ts';
import CopyValueButton from './copy-value-button';
import FavouriteConversionButton from './favourite-conversion-button';

const UnitDetailsSmallFrom = ({options, setFromUnitDetails, setCurrentValue, categoryValue, sectionHeightSmall, currentValue}: UnitFromSmallType): JSX.Element => {
	const [optionValue, setOptionValue] = useState(options[0]);

	const handleCurrentValueChange = (event: ChangeEvent<HTMLInputElement>) => {
		setCurrentValue(event.target.value);
	};

	const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
		const newValue = event.target.value;

		setOptionValue(newValue);
		setFromUnitDetails(newValue);
	};

	let catgNumber = 0;

	return (
		<div className={'unit-details-small-div from-section-styles'} style={{height: `calc(${sectionHeightSmall} / 2.5)`}}>
			<Col xs={8} sm={6} md={7} lg={8}>

				<div style={{flexDirection: 'column'}} className='d-flex justify-content-center unit-details-small-div' >

					<br></br><br></br>
					<span style={{display: 'flex'}}>
						<Col xs={4} sm={6} style={{display: 'flex', justifyContent: 'left'}} >
							From:
						</Col>
						<Col style={{display: 'flex', justifyContent: 'right', marginBottom: '15px', columnGap: '8px'}}>

							<FavouriteConversionButton theme={'small-devices'} />

							<CopyValueButton outputValue={ currentValue } />

						</Col>

					</span>

					<div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>

						<span className='unit-details-span'>
							<div style={{display: 'flex', justifyContent: 'center'}}>

								<input onChange={event => {
									handleCurrentValueChange(event);
								}} type='number' min={categoryValue === 'Temperature' || categoryValue === 'Angle' ? '' : '0'} />
								<select defaultValue={options[0]} id='select-element' onChange={event => {
									handleSelectChange(event);
								}} className='dropdown-styling' >

									{
										options.map((currentOption: string) => {
											catgNumber++;
											return (
												<option value={currentOption} key={`${categoryValue}-${catgNumber}`}>
													{currentOption}
												</option>
											);
										})
									}

								</select>

							</div>
						</span>
					</div>

				</div>
			</Col>
		</div>
	);
};

export default UnitDetailsSmallFrom;
