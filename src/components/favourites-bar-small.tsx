import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {Col} from 'react-bootstrap';

const FavouritesBarSmall = () => (
	<>
		<div style={{position: 'absolute', backgroundColor: '#fff', height: '60px', color: '#000', width: '50px', boxShadow: '1px 1px 5px 0px grey', paddingTop: '15px', marginTop: '10px', paddingBottom: '12px', justifyContent: 'center', display: 'flex', flexDirection: 'column', borderTopRightRadius: '50%', borderBottomRightRadius: '50%'}}>
			<div>

				<FontAwesomeIcon icon={faHeart} size='xl' style={{color: 'pink', fontSize: '30px', paddingLeft: '5px'}} />

			</div>
		</div>

	</>
);

export default FavouritesBarSmall;
