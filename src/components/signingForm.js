import React, {useState} from "react";
import {isWif} from "../utils/cyberway";

export default
function SigningForm(props) {

    const [key, setKey] = useState("");
    const [keyStyle, setKeyStyle] = useState("form-control")
    
    let keyInfo = "";

    const onChangeKey = (ev) => {
        const newKey = ev.target.value;
        if(!isWif(newKey)) {
            setKeyStyle("form-control is-invalid");
        } else {
            setKeyStyle("form-control is-valid");
        }
        setKey(newKey);
    }

    return (
        <form>
            <div className="alert alert-primary" role="alert">
                <h4>Signature</h4>
            </div>

        <div className="form-group">
            <label htmlFor="private_key">Private key</label>
            <input type="password" className={keyStyle} id="private_key" placeholder="Private key" 
                value={key} onChange={onChangeKey}/>
            <small id="passwordHelpBlock" className="form-text text-muted">
                For signing a private key required.
            </small>
        </div>
        <button onClick={() => props.submit(key)} type="button" className="btn btn-primary">Submit</button>
    </form>
    );
}