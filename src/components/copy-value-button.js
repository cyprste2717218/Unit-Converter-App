import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

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
            }, 3000)
        })
        .catch((err) => {
            console.log("Error", err);
        }); 
    }

    return (
        <> 
            <span style={{display: "flex", flexDirection: "row", width: "100%"}}>
                {copyButtonTextDisplayed && <div style={{position: "relative"}}>Value Copied!</div>}
                <FontAwesomeIcon className="copy-icon" icon={faCopy} onClick={onCopy} size="lg" />        
            </span>
           
        </>
    )
}

export default CopyValueButton;