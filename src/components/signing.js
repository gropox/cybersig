
import React from "react";
import queryString from "query-string";
import TransactionView from "./transactionView";
import ParseErrorView from "./parseErrorView";
import SigningForm from "./signingForm";

import {sendTransaction} from "../utils/cyberway";


export default
    function Signing(props) {

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

    if(parseError) {
        return ( <ParseErrorView parseError={parseError} /> );
    }

    if(!trJson) {
        return ( <ParseErrorView parseError={"Please provide parameter 'tr' with a transaction"} /> );
    }

    const doSubmit = (key) => {
        console.log("submit", trJson);
        sendTransaction(key, trJson)
            .then((r) => console.log("result", r))
            .catch(e => console.error("error", ""+e));
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 p-2 border ">
                    <SigningForm submit={doSubmit} />
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-sm-12 p-2 border ">
                    <TransactionView trJson={trJson} />
                </div>
            </div>
        </div>
    );
}
