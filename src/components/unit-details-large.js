import { Col } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";

const UnitDetailsLarge = ({ title, options, setFromUnitDetails, setToUnitDetails, fromUnitDetails, toUnitDetails, setCurrentValue, calculatedValue, categoryValue, sectionHeightLarge }) => {

  const [optionValue, setOptionValue] = useState(options[0]);

  const handleCurrentValueChange = (e) => {
    setCurrentValue(e.target.value);
  }

  const handleSelectChange = (e) => {

    const newValue = e.target.value;


    if (title === 'From') {
      setOptionValue(newValue);
      setFromUnitDetails(newValue);

    } else if (title === 'To') {
      setOptionValue(newValue);
      setToUnitDetails(newValue);
    }




  }

  /* Defining relevant classes to be applied to elements via placeholder variables */

  let catgNum = 0;
  const relevantSectionDetails = (title === 'From') ? "from-section-large" : "to-section-large";
  const relevantSectionBgColor = (title === 'From') ? "from-section-bg-large" : "to-section-bg-large"
  const relevantHeaderTitleBoxStyles = (title === 'From') ? "from-div-title-box-large" : "to-div-title-box-large";
  const relevantForegroundSection = (title === 'From') ? "from-convert-div-box-large" : "to-convert-div-box-large";
  const separatorStyles = (title === 'From') ? "from-title-separator-large" : "to-title-separator-large";

  return (
    <>

      <div className={`unit-details-large-div ${relevantSectionBgColor} ${relevantSectionDetails}` } style={{ height: `${sectionHeightLarge}`}}>
        <div style={{display: "flex", justifyContent: "center", width: "100%"}}>
            
            <div style={{ flexDirection: "column", height: `calc(${sectionHeightLarge}*0.6)`, marginTop: `calc(${sectionHeightLarge}*0.2)`}} className={`d-flex justify-content-center ${relevantForegroundSection}`} >
              
              <br></br>
              <div className={` ${relevantHeaderTitleBoxStyles}`}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {title}:
                </div>
              
              </div>
              <TitleSep separatorStyles={separatorStyles} />
              <br></br><br></br>
              <div className="larger-br-elems">
                <br></br><br></br>
              </div>
              <div>
                <span className="unit-details-span">
                  <div style={{ display: "flex", justifyContent: "center" }}>

                    {(title === 'To' ? <input readOnly value={calculatedValue} ></input> : <input onChange={(e) => handleCurrentValueChange(e)} type="number" inputMode="numeric" min={categoryValue === "Temperature" || categoryValue === "Angle" ? "" : "0"} />)}
                  
                    <select defaultValue={options[0]} id='select-element' onChange={(e) => handleSelectChange(e)} className='dropdown-styling' >

                      {
                        options.map((currentOption) => {
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
              <br></br><br></br>
        
      
            </div>
        
        </div>
      </div>

    </>
  )
}

const TitleSep = ({separatorStyles}) => {
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      <div className={`${separatorStyles}`} style={{width: "80%", height: "1px"}}></div>
    </div>
  )
}


export default UnitDetailsLarge;