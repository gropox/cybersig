import React, {useState} from "react";
import {isWif} from "../utils/cyberway";


export default
function SigningForm(props) {
    const {auths} = props;
    const defaultKeys = [];
    for(let a of auths) {defaultKeys.push("");}

    const [keys, setKeys] = useState(defaultKeys);

    const onChange = (idx, newKey) => {
        const newKeys = [...keys];
        console.log("keys", keys, "newKeys", newKeys, "idx", idx, "newKey", newKey);
        newKeys[idx] = newKey;
        console.log("newKeys", newKeys);
        setKeys(newKeys);
    }
    console.log("keys", keys, keys.length);
    return (
        <form>
            <div className="alert alert-primary" role="alert">
                <h4>Signature</h4>
            </div>
            {keys.map((k,idx) => <KeyBlock value={k} key={""+idx} auth={auths[idx]} onChange={(v) => onChange(idx, v)} />)}

        <button onClick={() => props.submit(keys)} type="button" className="btn btn-primary">Submit</button>
    </form>
    );
}

function KeyBlock(props) {
    const {auth} = props;

    const [key, setKey] = useState("");
    const [keyStyle, setKeyStyle] = useState("form-control")
    
    const onChangeKey = (ev) => {
        const newKey = ev.target.value;
        if(!isWif(newKey)) {
            setKeyStyle("form-control is-invalid");
        } else {
            setKeyStyle("form-control is-valid");
        }
        setKey(newKey);
        props.onChange(newKey);
    }

    return (
        <div className="form-group">
            <label htmlFor="private_key">Private key</label>
            <input type="password" className={keyStyle} id="private_key" placeholder="Private key" 
                value={key} onChange={onChangeKey}/>
            <small id="passwordHelpBlock" className="form-text text-muted">
                Private key for actor {auth.actor}, permission {auth.permission}
            </small>
        </div>
    );
}
