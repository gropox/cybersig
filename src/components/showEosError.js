import React from "react";


export default
function ShowEosError(props) {
    const error = props.error;

    let details = [];
    if(error.error.details) {
        details.push(<hr key={"hd"}/>);
        for(let d of error.error.details) {
            let m = d.message;
            m = m.replace("assertion failure with message: ", "");
            details.push(<p key={m}>{m}</p>);
            break;
        }
    }


    return (
        <div className="alert alert-danger" role="alert">
        <h4 className="alert-heading">{error.message}</h4>
        <p>{error.error.what}</p>
        {details}
    </div>        
    )
}