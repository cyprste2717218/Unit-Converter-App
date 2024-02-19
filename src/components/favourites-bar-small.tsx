import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faXmark} from '@fortawesome/free-solid-svg-icons';
import {Col} from 'react-bootstrap';
import {useState} from 'react';

const FavouritesBarSmall = ({height}) => {
	const [expanded, setExpanded] = useState(false);

	const labelStyle = expanded ? 'expanded-favbar-label-style' : 'unexpanded-favbar-label-style';

	const setFavouritesBarState = () => {
		setExpanded(!expanded);
	};

	const UnexpandedFavouritesBar = () => (
		<>
			<div className='unexpanded-favbar-style' onClick={setFavouritesBarState}>
				<div>
					<FontAwesomeIcon icon={faHeart} size='xl' style={{color: 'pink', fontSize: '30px', paddingLeft: '5px'}} />
				</div>
			</div>
		</>
	);

	const ExpandedFavouritesBar = () => (
		<>
			<div className='expanded-favbar-style' style={{position: 'absolute', width: '100px', height: `${height}`, backgroundColor: '#fff', boxShadow: '1px 1px 5px 0px grey', marginTop: '10px'}} >
				<div onClick={setFavouritesBarState}>
					<FontAwesomeIcon className='exit-icon-favbar' icon={faXmark} size='xl' style={{fontSize: '30px', paddingTop: '10px', paddingLeft: '10px', marginRight: '15px', marginTop: '10px', width: '50px'}} />
				</div>
				<hr></hr>

			</div>
		</>);

	const currentFavouritesBar = expanded ? <ExpandedFavouritesBar /> : <UnexpandedFavouritesBar />;

	return (
		<>
			<div className='favourites-bar-small'>
				{currentFavouritesBar}
			</div>

		</>);
};

export default FavouritesBarSmall;
