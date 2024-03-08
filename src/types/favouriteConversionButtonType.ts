export type favouriteConversionButtonType = {
	theme: string;
	fromUnitDetails: string;
	toUnitDetails: string;
	allFavourites: Object;
	setAllFavourites: React.Dispatch<React.SetStateAction<Object>>;
}