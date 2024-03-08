
import {useState, type ChangeEvent} from 'react';
import {type UnitFromLargeType} from '../types/unitDetailsType';
import CopyValueButton from './copy-value-button';
import FavouriteConversionButton from './favourite-conversion-button';

const UnitDetailsLargeFrom = ({options, setFromUnitDetails, setCurrentValue, categoryValue, sectionHeightLarge, currentValue, fromUnitDetails, toUnitDetails, allFavourites, setAllFavourites}: UnitFromLargeType): JSX.Element => {
	const [optionValue, setOptionValue] = useState(options[0]);

	const handleCurrentValueChange = (event: ChangeEvent<HTMLInputElement>) => {
		setCurrentValue(event.target.value);
	};

	const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
		const newValue = event.target.value;

		setOptionValue(newValue);
		setFromUnitDetails(newValue);
	};

	/* Defining relevant classes to be applied to elements via placeholder variables */

	let catgNumber = 0;
	return (
		<>

			<div className={'unit-details-large-div from-section-bg-large from-section-large' } style={{height: `${sectionHeightLarge}`}}>
				<div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>

					<div style={{flexDirection: 'column', height: `calc(${sectionHeightLarge}*0.6)`, marginTop: `calc(${sectionHeightLarge}*0.2)`}} className={'d-flex justify-content-center from-convert-div-box-large'} >

						<br></br>
						<div className={'from-div-title-box-large'}>
							<div style={{display: 'flex', justifyContent: 'center'}}>
								From:
							</div>

						</div>
						<TitleSep separatorStyles={'from-title-separator-large'} />
						<br></br><br></br>
						<div style={{display: 'flex', flexDirection: 'row', height: '25px', color: '#fff', justifyContent: 'right', paddingRight: '85px', columnGap: '12px'}}>

							<FavouriteConversionButton
								fromUnitDetails={fromUnitDetails}
								toUnitDetails={toUnitDetails}
								allFavourites={allFavourites}
								setAllFavourites={setAllFavourites}
								theme={'large-devices'}
							/>

							<div style={{marginTop: '5px'}}>
								<CopyValueButton outputValue={ currentValue } />
							</div>

						</div>

						<div className='larger-br-elems'>
							<br></br><br></br>
						</div>

						<div>
							<span className='unit-details-span'>
								<div style={{display: 'flex', justifyContent: 'center'}}>
									<input onChange={event => {
										handleCurrentValueChange(event);
									}} type='number' inputMode='numeric' min={categoryValue === 'Temperature' || categoryValue === 'Angle' ? '' : '0'} />

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

const TitleSep = ({separatorStyles}: {separatorStyles: string}) => (
	<div style={{display: 'flex', justifyContent: 'center'}}>
		<div className={`${separatorStyles}`} style={{width: '80%', height: '1px'}}></div>
	</div>
);

export default UnitDetailsLargeFrom;
