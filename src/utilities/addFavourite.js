import { useEffect } from "react";

export default function addFavourite(setAllFavourites, allFavourites, fromUnitDetails, toUnitDetails) {

	console.log('allFavourites:', allFavourites);
	const numFavourites = Object.keys(allFavourites).length;

    const lastKeyVal = numFavourites === 0 ? 0 : Number.parseInt(Object.keys(allFavourites).pop(), 10);

    const newKeyVal = Number.parseInt(lastKeyVal + 1, 10);
    const newFavourite = {};
    newFavourite[newKeyVal] = [fromUnitDetails, toUnitDetails];

	const updatedFavourites =  {newKeyVal: JSON.stringify(newFavourite[newKeyVal]), ...allFavourites}
   
	setAllFavourites(updatedFavourites);


}