import React from "react";

export default 
function Help() {

    const transfer = {
        "actions": [{
            "account": "cyber.token",
            "name": "transfer",
            "authorization": [{
                "actor": "zhm555xmzkd3",
                "permission": "active"
                }
            ],
            "data": {from: "zhm555xmzkd3", to: "ropox", quantity:"1.0000 CYBER", memo:"Memo text"}
            }
        ]
    };

    return (
        <div class="container">
            <p className="strong">This is a simple signing tool. In order to use it, please supply parameter "tr" in url with a valid transaction object.</p>

            <p>For example below is a transaction including transfer action</p>

            <div className="card">
                <div className="card-body">
                <a className="card-link" href={"https://gropox.github.io/cybersig?tr=" + JSON.stringify(transfer)}>Click to try this example</a>
                <pre className="mt-2">
                    https://gropox.github.io/cybersig?tr={JSON.stringify(transfer, null, 4)}
                </pre>
                </div>
            </div>

        </div>
    );
}