export default function addFavourite(setAllFavourites, allFavourites, fromUnitDetails, toUnitDetails) {
	console.log('allFavourites:', allFavourites);
	const numberFavourites = Object.keys(allFavourites).length;

	const lastKeyValue = numberFavourites === 0 ? 0 : Number.parseInt(Object.keys(allFavourites).pop(), 10);

	const newKeyValue = Number.parseInt(lastKeyValue + 1, 10);
	const newFavourite = {};
	newFavourite[newKeyValue] = [fromUnitDetails, toUnitDetails];

	const updatedFavourites = {newKeyVal: JSON.stringify(newFavourite[newKeyValue]), ...allFavourites};

	setAllFavourites(updatedFavourites);
}
