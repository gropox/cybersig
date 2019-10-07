import React from "react";

export default 
function ParseErrorView(props) {  
    return (
        <div className="p-2 border">
            <div className="alert alert-danger" role="alert">
                <h4>Erroneous transaction</h4>
            </div>
            <div>
                <p class=" text-danger font-weight-bold">{props.parseError}</p>
            </div>
        </div>
    );
}