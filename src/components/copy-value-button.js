import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { Col } from "react-bootstrap";

const CopyValueButton = ({outputValue}) => {

    const [copyButtonTextDisplayed, setCopyButtonTextDisplayed] = useState(false);

    async function copyTextToClipboard(outputValue) {
        if ('clipboard' in navigator) {
            console.log("navigator has clipboard");
            
            // writing output value to clipboard (primary way for most browsers)
            return await navigator.clipboard.writeText(outputValue);
        } else {
            console.log("no navigator.clipboard found");
            
            // writing output value to clipboard (fallback method for older/other browsers)
            document.execCommand('copy', true, outputValue);
        }
    }
    
    const onCopy = () => {

        copyTextToClipboard(outputValue)
        .then(() => {
            console.log("Copy to clipboard successful!");
            setCopyButtonTextDisplayed(true);

            setTimeout(() => {
                setCopyButtonTextDisplayed(false);
            }, 1000)
        })
        .catch((err) => {
            console.log("Error", err);
        }); 
    }

    return (
        <> 
            <span style={{display: "flex", flexDirection: "row", width: "100%"}}>

                <Col xs={11} sm={11} md={11} style={{display: "flex", justifyContent: "right"}}>
                    {copyButtonTextDisplayed && <div style={{position: "relative"}}>Value Copied!</div>}
                </Col>
                <Col xs={1} sm={1} md={1} style={{display: "flex", justifyContent: "left", marginLeft: "10px"}}>
                    <FontAwesomeIcon className="copy-icon" icon={faCopy} onClick={onCopy} size="xl" />        
                </Col>
        
           </span>
           
        </>
    )
}

export default CopyValueButton;