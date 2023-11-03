import { Col } from "react-bootstrap";
import { useRef, useEffect } from "react";

const UnitDetails = ({title, options, setFromUnitDetails, setToUnitDetails}) => {

    


   
    const handleSelectChange = (e) => {
      
      if (title === 'From') {
        setFromUnitDetails(e.target.value);
      } else if (title === 'To') {
        setToUnitDetails(e.target.value);
      }
      
  
    }

    return (
        <Col xs={12} md={5} className='d-flex justify-content-center'>
          <div className='convert-div d-flex justify-content-center' >
            <div style={{flexDirection: "column", width: "100%"}}>
              <br></br>
              <div className='d-flex justify-content-center header-box'>
                <div className='d-flex justify-content-center convert-div-title-box text-light'>{title}</div>
              </div>
              <br></br>
              <br></br>
              <div className='d-flex justify-content-center' style={{columnGap: "40px"}}>
                <select onChange={(e) => handleSelectChange(e)} className='dropdown-styling' >
                    {options.map(currentOption => 
                        <option>{currentOption}</option>
                    ) }   
                </select>
                <input type="number"></input>
              </div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </div>
          </div>
        </Col>
    )
}

export default UnitDetails;