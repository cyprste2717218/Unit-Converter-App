import {type IconDefinition} from '@fortawesome/free-solid-svg-icons';

export type UnitCategoryOptionsType = {
	categoryValue: string;
	setCategoryValue: React.Dispatch<React.SetStateAction<string>>;
	setCurrentUnits: React.Dispatch<React.SetStateAction<string[]>>;
	currentUnits: string[];
	setCalculatedValue: React.Dispatch<React.SetStateAction<string>>;
	calculatedValue: string;
	setCurrentValue: React.Dispatch<React.SetStateAction<string>>;
	currentValue: string;
};

export type OptionType = {

	name: string;
	value: number;
	icon: IconDefinition;

};

export type UnitsType = {
	Temperature: string[];
	Length: string[];
	Area: string[];
	Weight: string[];
	Volume: string[];
	Currency: string[];
	Time: string[];
	Speed: string[];
	Power: string[];
	Angle: string[];
	Data: string[];
	Fuel: string[];
};
