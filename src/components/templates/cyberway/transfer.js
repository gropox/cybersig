import React, { useState, useEffect } from "react";
import { transfer } from "../../../templates/cyberway"
import { Link } from "react-router-dom"

const ASSETS = {
    GOLOS: {decs: 3, symbol: "GOLOS"},
    CYBER: {decs: 4, symbol: "CYBER"},
};

export default
    function Transfer(props) {

    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [amount, setAmount] = useState();
    const [asset, setAsset] = useState("CYBER");
    const [memo, setMemo] = useState("");

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 border">
            <form className="p-2">
                <div className="alert alert-primary" role="alert">
                    <h4>Transfer</h4>
                </div>

                <div className="form-group">
                    <label htmlFor="from">From</label>
                    <input type="text" className="form-control form-control-sm" id="from" placeholder="cyberway account"
                        value={from} onChange={(ev) => setFrom(ev.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="to">To</label>
                    <input type="text" className="form-control form-control-sm" id="to" placeholder="cyberway account"
                        value={to} onChange={(ev) => setTo(ev.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" min="0" className="form-control form-control-sm" id="bid" placeholder="bid amount"
                        value={amount} onChange={(ev) => setAmount(ev.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="asset">Asset</label>
                    <select className="form-control form-control-sm" onChange={(ev) => setAsset(ev.target.value)}>
                        {Object.keys(ASSETS).map(a => {
                            return (
                                <option value={a} selected={asset == a}>{a}</option>
                            );
                        })}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="memo">To</label>
                    <input type="text" className="form-control form-control-sm" id="memo" placeholder="memo"
                        value={memo} onChange={(ev) => setMemo(ev.target.value)} />
                </div>
                <Link to={"/signing?tr=" + JSON.stringify(transfer(from, to, amount, ASSETS[asset], memo))} type="button" className="btn btn-primary">Sign</Link>
            </form>
                </div>
            </div>
        </div>

    );

}