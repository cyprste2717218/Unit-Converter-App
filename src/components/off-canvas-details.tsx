import {useState} from 'react';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Offcanvas} from 'react-bootstrap';

const [show, setShow] = useState(false);

const handleClose = () => {
	setShow(false);
};

const handleShow = () => {
	setShow(true);
};

const OffCanvasDetails = () => (
	<Offcanvas show={show} onHide={handleClose} style={{fontFamily: 'Montserrat', color: '#000'}}>
		<Offcanvas.Header closeButton>
			<Offcanvas.Title><b>About: </b> </Offcanvas.Title>
		</Offcanvas.Header>
		<Offcanvas.Body >
			<b>Developed by Stephen Ingham (<a rel='noopener' id='github-text-link-small' target='_blank' href='https://github.com/cyprste2717218'>@cyprste2717218</a>)</b>
			<br></br><br></br>
			<ul>
				<li style={{marginBottom: '10px'}}>
					<a rel='noopener' id='github-text-list-link-small' target='_blank' href='https://github.com/cyprste2717218'>
						<FontAwesomeIcon size='xl' icon={faGithub} style={{marginRight: '5px', color: '#08a126'}} />
                Github Link
					</a>
				</li>
				<li>
					<a rel='noopener' id='linkedin-text-list-link-small' target='_blank' href='https://www.linkedin.com/in/stephen-ingham-/'>
						<FontAwesomeIcon size='xl' icon={faLinkedin} style={{marginRight: '5px', color: '#08a126'}} />
              Linkedin Link
					</a>
				</li>
			</ul>

		</Offcanvas.Body>
	</Offcanvas>

);

export default OffCanvasDetails;
