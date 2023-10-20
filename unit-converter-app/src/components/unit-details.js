import { Col } from "react-bootstrap";

const UnitDetails = ({title, options}) => {
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
                {console.log("Options:", options)}
                <select className='dropdown-styling'>
                    {console.log("Options:", options)}
                    {options.map(currentOption => 
                        <option>{currentOption}</option>
                    ) }
                 {/* to render from props using .map */}
                </select>
                <input type="text"></input>
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