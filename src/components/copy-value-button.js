import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

const CopyValueButton = ({outputValue}) => {

    const [copyButtonTextDisplayed, setCopyButtonTextDisplayed] = useState(false);

    const onCopy = () => {

        // checking if device granted access to copy to clipboard
        const queryOpts = { name: "clipboard-write", allowWithoutGesture: false};
       
        if (navigator.clipboard) {
            console.log("navigator has clipboard");

            navigator.permissions.query(queryOpts).then((result) => {
                console.log("resolved to some result object:", result);
                if (result.state === "granted" || result.state === "prompt") {
                // writing output value to clipboard (primary way for most browsers)
                  console.log("result state either granted or prompt");
                  navigator.clipboard.writeText(outputValue).then(
                    () => {
                        console.log("Copy to clipboard successful!");
                        setCopyButtonTextDisplayed(true);
    
                        setTimeout(() => {
                            setCopyButtonTextDisplayed(false);
                        }, 3000)
                    },
                    () => {
                        console.log("Copy to clipboard not succesful");
                    },
                  ).catch((err) => {
                    console.log("Error:", err)
                  });
                } else {
                    console.log("result.state is not granted or prompt");
                }

              });
                
    
        } else {
            console.log("no navigator.clipboard found");

            // writing output value to clipboard (fallback method for older/other browsers)
            document.execCommand('copy', true, outputValue);

        }
    

        
    }

    return (
        <> 
            <span style={{display: "flex", flexDirection: "row", width: "100%"}}>
                {copyButtonTextDisplayed && <div style={{position: "fixed", right: "80px"}}>Value Copied!</div>}
                <FontAwesomeIcon className="copy-icon" icon={faCopy} onClick={onCopy} size="lg" />        
            </span>
           
        </>
    )
}

export default CopyValueButton;