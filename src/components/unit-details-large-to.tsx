
import {useState, type ChangeEvent} from 'react';
import {type UnitToLargeType} from '../types/unitDetailsType';
import CopyValueButton from './copy-value-button';

const UnitDetailsLargeTo = ({options, setToUnitDetails, setCurrentValue, calculatedValue, categoryValue, sectionHeightLarge, currentValue}: UnitToLargeType): JSX.Element => {
	const [optionValue, setOptionValue] = useState(options[0]);

	const handleCurrentValueChange = (event: ChangeEvent<HTMLInputElement>) => {
		setCurrentValue(event.target.value);
	};

	const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
		const newValue = event.target.value;

		setOptionValue(newValue);
		setToUnitDetails(newValue);
	};

	/* Defining relevant classes to be applied to elements via placeholder variables */

	let catgNumber = 0;

	return (
		<>

			<div className={'unit-details-large-div to-section-bg-large to-section-large' } style={{height: `${sectionHeightLarge}`}}>
				<div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>

					<div style={{flexDirection: 'column', height: `calc(${sectionHeightLarge}*0.6)`, marginTop: `calc(${sectionHeightLarge}*0.2)`}} className={'d-flex justify-content-center to-convert-div-box-large'} >

						<br></br>
						<div className={'to-div-title-box-large'}>
							<div style={{display: 'flex', justifyContent: 'center'}}>
								To:
							</div>

						</div>
						<TitleSep separatorStyles={'to-title-separator-large'} />
						<br></br><br></br>
						<div style={{display: 'flex', flexDirection: 'row', height: '25px', color: '#000', justifyContent: 'right', columnGap: '12px', paddingRight: '85px'}}>

							<div style={{marginTop: '5px'}}>
								<CopyValueButton outputValue={calculatedValue} />
							</div>
						</div>

						<div className='larger-br-elems'>
							<br></br><br></br>
						</div>

						<div>
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
						<br></br><br></br>

					</div>

				</div>
			</div>

		</>
	);
};

const TitleSep = ({separatorStyles}: {separatorStyles: 'from-title-separator-large' | 'to-title-separator-large'}) => (
	<div style={{display: 'flex', justifyContent: 'center'}}>
		<div className={`${separatorStyles}`} style={{width: '80%', height: '1px'}}></div>
	</div>
);

export default UnitDetailsLargeTo;
