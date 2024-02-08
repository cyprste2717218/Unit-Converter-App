/// <reference types="react" />
export type UnitDetailsType = {
    title: string;
    options: string[];
    setFromUnitDetails?: React.Dispatch<React.SetStateAction<string>>;
    setToUnitDetails?: React.Dispatch<React.SetStateAction<string>>;
    fromUnitDetails?: string;
    toUnitDetails?: string;
    setCurrentValue?: React.Dispatch<React.SetStateAction<string>>;
    calculatedValue?: string;
    categoryValue: string;
    sectionHeightSmall?: string;
    sectionHeightLarge?: string;
    currentValue: string;
    result?: Function;
};
//# sourceMappingURL=unitDetailsType.d.ts.map