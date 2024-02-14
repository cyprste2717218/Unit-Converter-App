import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {Col} from 'react-bootstrap';

const FavouriteConversionButton = ({theme}: {theme: string}): JSX.Element => {
	let favouriteButton: JSX.Element;

	if (theme === 'large-devices') {
		favouriteButton = <Col xs={1} sm={1} md={1} style={{display: 'flex', width: '40px', height: '40px', paddingTop: '9px', justifyContent: 'center', boxShadow: '1px 1px 5px 0px grey', borderRadius: '50%', marginTop: 'auto', marginBottom: 'auto', backgroundColor: '#fff', color: '#03c10c'}}>
			<div>
				<FontAwesomeIcon icon={faHeart} size='xl' />
			</div>
		</Col>;
	} else if (theme === 'small-devices') {
		favouriteButton = <Col xs={1} sm={1} md={1} style={{display: 'flex', width: '40px', height: '40px', paddingTop: '9px', justifyContent: 'center', boxShadow: '1px 1px 5px 0px grey', borderRadius: '50%', marginTop: 'auto', marginBottom: 'auto'}}>
			<div >

				<FontAwesomeIcon icon={faHeart} size='xl' />
			</div>
		</Col>;
	}

	return (
		<>
			{favouriteButton}
		</>

	);
};

export default FavouriteConversionButton;
