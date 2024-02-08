
type Type = 'From' | 'To';

export type UnitDetailsType = 
	 {
		type: Type;
		title: string;
		options: string[];
		setToUnitDetails: React.Dispatch<React.SetStateAction<string>>;
		calculatedValue: string;
		categoryValue: string;
		sectionHeightSmall?: string;
		sectionHeightLarge?: string;
		setFromUnitDetails: React.Dispatch<React.SetStateAction<string>>;
		fromUnitDetails: string;
		result: Function;
		toUnitDetails: string;
		setCurrentValue: React.Dispatch<React.SetStateAction<string>>;
		currentValue: string;
	
	  } 
	  
export type UnitFromLargeType = {

	options: string[]
	setFromUnitDetails: React.Dispatch<React.SetStateAction<string>>;
	setCurrentValue: React.Dispatch<React.SetStateAction<string>>;
	categoryValue: string;
	sectionHeightLarge: string;
	currentValue: string;

}

export type UnitToLargeType = {
	
	options: string[]
	setToUnitDetails: React.Dispatch<React.SetStateAction<string>>;
	setCurrentValue: React.Dispatch<React.SetStateAction<string>>;
	calculatedValue: string;
	categoryValue: string;
	sectionHeightLarge: string;
	currentValue: string;

}

export type UnitFromSmallType = {

	options: string[]
	setFromUnitDetails: React.Dispatch<React.SetStateAction<string>>;
	setCurrentValue: React.Dispatch<React.SetStateAction<string>>;
	categoryValue: string;
	sectionHeightSmall: string;
	currentValue: string;

}

export type UnitToSmallType = {
	
	options: string[]
	setToUnitDetails: React.Dispatch<React.SetStateAction<string>>;
	setCurrentValue: React.Dispatch<React.SetStateAction<string>>;
	calculatedValue: string;
	categoryValue: string;
	sectionHeightSmall: string;
	currentValue: string;


}

