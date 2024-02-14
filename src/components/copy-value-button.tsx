import {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCopy} from '@fortawesome/free-solid-svg-icons';
import {Col} from 'react-bootstrap';

const CopyValueButton = ({outputValue}: {outputValue: string}): JSX.Element => {
	const [copyButtonTextDisplayed, setCopyButtonTextDisplayed] = useState(false);

	async function copyTextToClipboard(outputValue: string) {
		if ('clipboard' in navigator) {
			console.log('navigator has clipboard');

			// Writing output value to clipboard (primary way for most browsers)
			return navigator.clipboard.writeText(outputValue);
		}

		console.log('no navigator.clipboard found');

		// Writing output value to clipboard (fallback method for older/other browsers)
		document.execCommand('copy', true, outputValue);
	}

	const onCopy = () => {
		copyTextToClipboard(outputValue)
			.then(() => {
				console.log('Copy to clipboard successful!');
				setCopyButtonTextDisplayed(true);

				setTimeout(() => {
					setCopyButtonTextDisplayed(false);
				}, 1000);
			})
			.catch(error => {
				console.log('Error', error);
			});
	};

	return (
		<>
			<div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginBottom: '5px'}}>

				<Col xs={1} sm={1} md={1} style={{display: 'flex', justifyContent: 'left', marginLeft: '10px'}}>
					<FontAwesomeIcon className='copy-icon' icon={faCopy} onClick={onCopy} size='xl' />
				</Col>
				<Col xs={6} sm={6} md={6} style={{display: 'flex', justifyContent: 'left'}}>
					{copyButtonTextDisplayed && <div style={{position: 'absolute'}}>Value Copied!</div>}
				</Col>

			</div>
		</>
	);
};

export default CopyValueButton;
