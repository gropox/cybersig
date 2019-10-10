
import React, { useState } from "react";
import queryString from "query-string";
import TransactionView from "./transactionView";
import ParseErrorView from "./parseErrorView";
import SigningForm from "./signingForm";

import { sendTransaction } from "../utils/cyberway";
import ShowEosError from "./showEosError";

export default
    function Signing(props) {

    const [result, setResult] = useState();
    const [error, setError] = useState();

    const params = queryString.parse(window.location.search);
    let trJson = null;
    let parseError = null;
    if (params.tr) {
        try {
            trJson = JSON.parse(params.tr)
        } catch (e) {
            parseError = e + "";
        }
    }

    if (parseError) {
        return (<ParseErrorView parseError={parseError} />);
    }

    if (!trJson) {
        return (<ParseErrorView parseError={"Please provide parameter 'tr' with a transaction"} />);
    }

    const doSubmit = (keys) => {
        console.log("submit", trJson);
        sendTransaction(keys, trJson)
            .then(r => setResult(r))
            .catch(e => setError((!!e.json)? e.json : {error:{what:""+e},message:"Error while signing transaction!"} ));
    }
    error && console.error("error", error);
    result && console.log("result", result);
    trJson && console.log("trJson", trJson);

    if (result) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 p-2 border ">
                        <div className="alert alert-success" role="alert">
                            <h4 className="alert-heading">Success</h4>
                            <p>Transaction <a className="alert-link" target="_blank" href={"https://explorer.cyberway.io/trx/" + result.transaction_id}>{result.transaction_id}</a></p>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-sm-12 p-2 border ">
                        <TransactionView trJson={trJson} />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 p-2 border ">
                    <SigningForm submit={doSubmit} auths={extractAuths(trJson)} />
                </div>
            </div>
            {error && (
                <div className="row mt-2">
                    <div className="col-sm-12 p-2 border ">
                        <ShowEosError error={error} />
                    </div>
                </div>
            )}
            <div className="row mt-2">
                <div className="col-sm-12 p-2 border ">
                    <TransactionView trJson={trJson} />
                </div>
            </div>
        </div>
    );
}


function extractAuths(trJson) {
    if(!trJson || !trJson.actions || !trJson.actions.length) return [];

    const auths = [];
    for(let a of trJson.actions) {
        if(a.authorization && a.authorization.length) {
            auths.push(...a.authorization);
        }
    }
    return auths;
}