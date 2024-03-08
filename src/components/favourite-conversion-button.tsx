import {useState, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {faHeart as faOutlineHeart} from '@fortawesome/free-regular-svg-icons';
import {Col} from 'react-bootstrap';
import {type favouriteConversionButtonType} from '../types/favouriteConversionButtonType.ts';
import addFavourite from '../utilities/addFavourite';

const FavouriteConversionButton = ({theme, fromUnitDetails, toUnitDetails, allFavourites, setAllFavourites}: favouriteConversionButtonType): JSX.Element => {
	const [FavButtonEnabled, setFavButtonEnabled] = useState(false);

	const handleClick = () => {
		if (window.navigator.vibrate) {
			window.navigator.vibrate(500);
		} else {
			console.log('haptic feedback not supported on device');
		}

		setFavButtonEnabled(!FavButtonEnabled);
		addFavourite(setAllFavourites, allFavourites, fromUnitDetails, toUnitDetails);
	};

	let favouriteButton: JSX.Element;

	const heartState = FavButtonEnabled ? faHeart : faOutlineHeart;

	if (theme === 'large-devices') {
		favouriteButton = <Col xs={1} sm={1} md={1} style={{display: 'flex', width: '40px', height: '40px', paddingTop: '9px', justifyContent: 'center', boxShadow: '1px 1px 5px 0px grey', borderRadius: '50%', marginTop: 'auto', marginBottom: 'auto', backgroundColor: '#fff', color: '#03c10c'}}>
			<button onClick={handleClick} style={{backgroundColor: 'transparent', border: '0px solid', marginBottom: '20px'}}>
				<FontAwesomeIcon icon={heartState} size='xl' />
			</button>
		</Col>;

		return favouriteButton;
	}

	if (theme === 'small-devices') {
		favouriteButton = <Col xs={1} sm={1} md={1} style={{display: 'flex', width: '40px', height: '40px', paddingTop: '9px', justifyContent: 'center', boxShadow: '1px 1px 5px 0px grey', borderRadius: '50%', marginTop: 'auto', marginBottom: 'auto'}}>
			<button onClick={handleClick} style={{backgroundColor: 'transparent', border: '0px solid', marginBottom: '20px'}}>
				<FontAwesomeIcon icon={faHeart} size='xl' />
			</button>
		</Col>;

		return favouriteButton;
	}

	return <></>;
};

export default FavouriteConversionButton;
