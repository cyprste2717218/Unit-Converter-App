import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faXmark} from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';

const FavouritesBarLarge = ({favourites, setAllFavourites}): JSX.Element => {
	const [expanded, setExpanded] = useState(false);

	const setFavouritesBarState = () => {
		setExpanded(!expanded);
	};

	let displayedFavourites: JSX.Element;
	if (favourites === undefined) {
		displayedFavourites = <div>error</div>;
	} else {
		displayedFavourites = favourites.length > 0 ? <div>{favourites[0]}</div> : <div>no favourites</div>;
	}

	const UnexpandedFavouritesBar = () => (
		<>
			<div style={{width: '100px', height: '30px', marginLeft: '10px', marginTop: '10px', marginBottom: '5px'}} onClick={setFavouritesBarState}>
				<div style={{display: 'flex', justifyContent: 'center'}}>
					<FontAwesomeIcon className='heart-icon-favbar' icon={faHeart} size='xl' />
				</div>

			</div>
		</>
	);

	const ExpandedFavouritesBar = () => (
		<>
			<div style={{height: '75px', width: '100px', display: 'flex', flexDirection: 'row', marginLeft: '10px', marginTop: '10px', paddingBottom: '10px'}}>

				<div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', width: '100px'}}>

					<FontAwesomeIcon className='exit-icon-favbar' icon={faXmark} size='xl' style={{fontSize: '30px'}} onClick={setFavouritesBarState} />

					<div style={{display: 'flex', justifyContent: 'center'}}>
						<p>Favourites</p>
					</div>

				</div>

			</div>
			<div>
				{displayedFavourites}
			</div>
		</>
	);

	const currentFavouritesBar = expanded ? <ExpandedFavouritesBar /> : <UnexpandedFavouritesBar />;

	return (
		<>
			<div className='favourites-bar-large'>
				{currentFavouritesBar}
			</div>
		</>
	);
};

export default FavouritesBarLarge;
