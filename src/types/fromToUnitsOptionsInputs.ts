export type FromToUnitsOptionsInputsType = {
    currentUnits: string[],
    categoryValue: string,
    setFromUnitDetails: React.Dispatch<React.SetStateAction<string>>,
    setToUnitDetails: React.Dispatch<React.SetStateAction<string>>,
    fromUnitDetails: string,
    toUnitDetails: string,
    setCurrentValue: React.Dispatch<React.SetStateAction<string>>,
    currentValue: string,
    setCalculatedValue: React.Dispatch<React.SetStateAction<string>>,
    calculatedValue: string,
    previousCategoryValue: string,
    setPreviousCategoryValue: React.Dispatch<React.SetStateAction<string>>,
    sectionHeightSmall: string,
    sectionHeightLarge: string
}