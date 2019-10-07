import React from "react";

export default 
function TransactionView(props) {    
    return (
        <div className="">
            <div className="alert alert-primary" role="alert">
                <h4>Content</h4>
            </div>
            <div>
                <pre  >
                    {JSON.stringify(props.trJson, null, 2)}
                </pre>
            </div>
        </div>
    );
}