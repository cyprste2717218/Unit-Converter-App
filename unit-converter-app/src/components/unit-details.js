import { Col } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";

const UnitDetails = ({ title, options, setFromUnitDetails, setToUnitDetails, fromUnitDetails, toUnitDetails, setCurrentValue, calculatedValue, categoryValue }) => {
    
  const [optionValue, setOptionValue] = useState(options[0]);

  let catgNum = 0;



    const handleCurrentValueChange = (e) => {
      setCurrentValue(e.target.value);
    }
   
    const handleSelectChange = (e) => {

      if (title === 'From') {
        setOptionValue(e.target.value);
        setFromUnitDetails(e.target.value);

      } else if (title === 'To') {
        setOptionValue(e.target.value);
        setToUnitDetails(e.target.value);
      }
      
    }




    return (
      <div className="unit-details-div">
        <Col xs={10} sm={10} md={7} lg={8}>
      
        <div style={{flexDirection: "column"}} className='d-flex justify-content-center convert-div' >
          
            
            <div className='convert-div-title-box text-light header-box'>
              <div style={{display: "flex", justifyContent: "center"}}>
              {title}
              </div>
            </div>
            <br></br><br></br><br></br>
            <div className="larger-br-elems">
              <br></br><br></br>
            </div>
            <div>   
              <span className="unit-details-span">
                <div style={{display: "flex", justifyContent: "center"}}>

               
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
              
                
                {(title === 'To' ? <input readOnly value={calculatedValue} ></input> : <input onChange={(e) => handleCurrentValueChange(e)} type="number" />)}   
                </div>
                </span>  
            </div>
            <br></br><br></br>
            <div className="mobile-br-elems">
              <br></br><br></br>
            </div>
            <div className="larger-br-elems">
              <br></br><br></br><br></br><br></br>
            </div>
         
        </div>
        </Col>
      </div>
    )
}

export default UnitDetails;