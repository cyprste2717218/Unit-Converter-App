import { Col } from "react-bootstrap";
import { useState, useRef, useEffect, ChangeEvent } from "react";
import CopyValueButton from "./copy-value-button";
import { UnitDetailsType } from "../types/unitDetailsType";





const UnitDetailsSmall = ({ title, options, setFromUnitDetails, setToUnitDetails, fromUnitDetails, toUnitDetails, setCurrentValue, calculatedValue, categoryValue, sectionHeightSmall, currentValue }: UnitDetailsType): JSX.Element => {

    const [optionValue, setOptionValue] = useState(options[0]);

    const handleCurrentValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentValue(e.target.value);
    }

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {

        const newValue = e.target.value;


        if (title === 'From') {
            setOptionValue(newValue);
            setFromUnitDetails(newValue);

        } else if (title === 'To') {
            setOptionValue(newValue);
            setToUnitDetails(newValue);
        }
    }



    let catgNum = 0;
    const relevantSectionStyles = (title === 'From') ? "from-section-styles" : "to-section-styles";


    return (
        <div className={`unit-details-small-div ${relevantSectionStyles}`} style={{ height: `calc(${sectionHeightSmall} / 2)` }}>
            <Col xs={8} sm={6} md={7} lg={8}>

                <div style={{ flexDirection: "column" }} className='d-flex justify-content-center unit-details-small-div' >






                    <br></br><br></br>
                    <span style={{display: "flex"}}>
                        <Col xs={4} sm={6} style={{display: "flex", justifyContent: "left"}} >
                            {title}:
                        </Col>
                        <Col xs={8} sm={6} style={{display: "flex", justifyContent: "right"}}>
                            <CopyValueButton outputValue={(title === 'From' ? currentValue : calculatedValue)}  />
                  
                        </Col>
                    
                       
                           
                        
                    </span>
                    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                   
                        <span className="unit-details-span">
                            <div style={{ display: "flex", justifyContent: "center" }}>
                           
                                {(title === 'To' ? <input readOnly value={calculatedValue}  ></input> : <input onChange={(e) => handleCurrentValueChange(e)} type="number" min={categoryValue === "Temperature" || categoryValue === "Angle" ? "" : "0"} />)}
                                <select defaultValue={options[0]} id='select-element' onChange={(e) => handleSelectChange(e)} className='dropdown-styling' >

                                    {
                                        options.map((currentOption: string) => {
                                            catgNum++;
                                            return (
                                                <option value={currentOption} key={`${categoryValue}-${catgNum}`}>
                                                    {currentOption}
                                                </option>
                                            );
                                        })
                                    }

                                </select>



                            </div>
                        </span>
                    </div>


                </div>
            </Col>
        </div>
    )

}

export default UnitDetailsSmall;