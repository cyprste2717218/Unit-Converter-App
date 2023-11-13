import { Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footer">
            
                <span style={{display: "flex", flexDirection: "row"}}>
                    <Col xs={8} lg={9} style={{fontSize: "20px", padding: "20px"}}>
                        <div style={{marginTop: "auto", marginBottom: "auto"}}>
                            <p>Developed by <a href="https://github.com/cyprste2717218">@cyprste2717218</a></p>
                        </div>
                    </Col>
                    <Col xs={4} lg={3} style={{padding: "10px",  marginTop: "auto", marginBottom: "auto", color: "#000"}} >
                        <div style={{display: "flex", fontSize: "34px", justifyContent: 'flex-end', columnGap: '10px', padding: "5px"}}>
                        <a href='https://github.com/cyprste2717218'>
                            <FontAwesomeIcon size='xl' icon={faGithub} />
                        </a>
                        <a href='https://www.linkedin.com/in/stephen-ingham-/'>
                            <FontAwesomeIcon size='xl' icon={faLinkedin} />
                        </a>
                        </div>
              
                    </Col>
            
          
              
               
               
                </span>
           
            
        </div>
    )
}

export default Footer;