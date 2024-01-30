import './App.css';
import React, {useState, useEffect} from 'react';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {Offcanvas} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

/* Component Imports */

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import converter from './utilities/converter.js';
import UnitConvNavbar from './components/unit-conv-navbar';
import FromToUnitsOptions from './components/from-to-units-options';
import UnitCategoryOptions from './components/unit-category-options';

const App = () => {
	const [checked, setChecked] = useState(false);
	const [categoryValue, setCategoryValue] = useState('Temperature');
	const [currentUnits, setCurrentUnits] = useState(['Celsius', 'Farenheit', 'Kelvin']);
	const [fromUnitDetails, setFromUnitDetails] = useState(currentUnits[0]);
	const [toUnitDetails, setToUnitDetails] = useState(currentUnits[0]);
	const [currentValue, setCurrentValue] = useState('');
	const [calculatedValue, setCalculatedValue] = useState('');
	const [previousCategoryValue, setPreviousCategoryValue] = useState(categoryValue);
	const [show, setShow] = useState(false);

	const handleClose = () => {
		setShow(false);
	};

	const handleShow = () => {
		setShow(true);
	};

	useEffect(() => {
		if (previousCategoryValue !== categoryValue) {
			setPreviousCategoryValue(categoryValue);
			setFromUnitDetails(currentUnits[0]);
			setToUnitDetails(currentUnits[0]);
		}

		converter(fromUnitDetails, toUnitDetails, currentValue, setCalculatedValue, categoryValue);
	});
	const sectionHeight = 'calc(100vh - 225px)';
	const sectionHeightSmall = 'calc(100vh - 225px)';
	const sectionHeightLarge = 'calc(100vh - 205px)';

	return (

		<>
			<div style={{fontFamily: 'Montserrat'}}>
				<Offcanvas show={show} onHide={handleClose} style={{fontFamily: 'Montserrat', color: '#000'}}>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title><b>About: </b> </Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body >
						<b>Developed by Stephen Ingham (<a rel='noopener' id='github-text-link-small' target='_blank' href='https://github.com/cyprste2717218'>@cyprste2717218</a>)</b>
						<br></br><br></br>
						<ul>
							<li style={{marginBottom: '10px'}}>
								<a rel='noopener' id='github-text-list-link-small' target='_blank' href='https://github.com/cyprste2717218'>
									<FontAwesomeIcon size='xl' icon={faGithub} style={{marginRight: '5px', color: '#08a126'}} />
                  Github Link
								</a>
							</li>
							<li>
								<a rel='noopener' id='linkedin-text-list-link-small' target='_blank' href='https://www.linkedin.com/in/stephen-ingham-/'>
									<FontAwesomeIcon size='xl' icon={faLinkedin} style={{marginRight: '5px', color: '#08a126'}} />
                Linkedin Link
								</a>
							</li>
						</ul>

					</Offcanvas.Body>
				</Offcanvas>

				<UnitConvNavbar
					handleShow={handleShow}
				/>
				<div className='this' style={{height: sectionHeight}} >

					<UnitCategoryOptions
						setCategoryValue={setCategoryValue}
						categoryValue={categoryValue}
						setCurrentUnits={setCurrentUnits}
						currentUnits={currentUnits}
						setCalculatedValue={setCalculatedValue}
						calculatedValue={calculatedValue}
						setCurrentValue={setCurrentValue}
						currentValue={currentValue}

					/>

					<FromToUnitsOptions

						currentUnits={currentUnits}
						categoryValue={categoryValue}
						setFromUnitDetails={setFromUnitDetails}
						setToUnitDetails={setToUnitDetails}
						fromUnitDetails={fromUnitDetails}
						toUnitDetails={toUnitDetails}
						setCurrentValue={setCurrentValue}
						currentValue={currentValue}
						setCalculatedValue={setCalculatedValue}
						calculatedValue={calculatedValue}
						previousCategoryValue={previousCategoryValue}
						setPreviousCategoryValue={setPreviousCategoryValue}
						sectionHeightSmall={sectionHeightSmall}
						sectionHeightLarge={sectionHeightLarge}
					/>

				</div>

			</div>
		</>

	);
};

export default App;
