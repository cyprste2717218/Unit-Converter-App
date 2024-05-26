export type FavouriteConversionButtonType = {
	theme: string;
	fromUnitDetails: string;
	toUnitDetails: string;
	allFavourites: Record<string, unknown>;
	setAllFavourites: React.Dispatch<React.SetStateAction<Record<string, unknown>>>;
};
