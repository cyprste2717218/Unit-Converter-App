import {Col} from 'react-bootstrap';
import {useState, type ChangeEvent} from 'react';
import {type UnitToSmallType} from '../types/unitDetailsType.ts';
import CopyValueButton from './copy-value-button';

const UnitDetailsSmallTo = ({options, setToUnitDetails, setCurrentValue, calculatedValue, categoryValue, sectionHeightSmall}: UnitToSmallType): JSX.Element => {
	const [optionValue, setOptionValue] = useState(options[0]);

	const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
		const newValue = event.target.value;

		setOptionValue(newValue);
		setToUnitDetails(newValue);
	};

	let catgNumber = 0;

	return (
		<div className={'unit-details-small-div to-section-styles'} style={{height: `calc(${sectionHeightSmall} / 2)`}}>
			<Col xs={8} sm={6} md={7} lg={8}>

				<div style={{flexDirection: 'column'}} className='d-flex justify-content-center unit-details-small-div' >

					<br></br><br></br>
					<span style={{display: 'flex'}}>
						<Col xs={4} sm={6} style={{display: 'flex', justifyContent: 'left'}} >
							To:
						</Col>
						<Col style={{display: 'flex', justifyContent: 'right', marginBottom: '15px', columnGap: '8px'}}>

							<CopyValueButton outputValue={calculatedValue} />

						</Col>

					</span>
					<div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>

						<span className='unit-details-span'>
							<div style={{display: 'flex', justifyContent: 'center'}}>

								<input readOnly value={calculatedValue} ></input>
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

export default UnitDetailsSmallTo;
