import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

const CopyValueButton = ({outputValue}) => {

    const [copyButtonTextDisplayed, setCopyButtonTextDisplayed] = useState(false);

    const onCopy = () => {

        // checking if device granted access to copy to clipboard
        navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
            if (result.state === "granted" || result.state === "prompt") {
            // writing output value to clipboard
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
              );
            }
          });


        
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