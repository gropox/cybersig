import React, { useState, useEffect } from "react";
import { bidname } from "../../../templates/cyberway"
import { Link } from "react-router-dom"
import {sendRequest} from "../../../utils/cyberway";

const QUERY_URI = "/v1/chain/get_table_rows";
const QUERY_PARAM = {
    json: true,
    code: "cyber",
    scope: "cyber",
    table: "namebids",
    lower_bound: null,
    upper_bound: null,
    limit: 50,
    index: "highbid",
    encode_type: "dec",
    reverse: false,
    show_payer: false
};

export default
    function BidName(props) {

    const [bidder, setBidder] = useState("");
    const [newname, setNewname] = useState("");
    const [bid, setBid] = useState(0);
    const [bids, setBids] = useState({});

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await sendRequest(QUERY_URI, QUERY_PARAM);
                console.log(data)
                if(data && data.data && data.data.rows) {
                    setBids(data.rows);
                }
            } catch(e) {
                
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <div>
            <form>
                <div className="alert alert-primary" role="alert">
                    <h4>Bidname</h4>
                </div>

                <div className="form-group">
                    <label htmlFor="bidder">Bidder</label>
                    <input type="text" className="form-control" id="bidder" placeholder="cyberway account"
                        value={bidder} onChange={(ev) => setBidder(ev.target.value)} />
                    <small id="bidderHelpBlock" className="form-text text-muted">
                        Cyberway account
                </small>
                </div>
                <div className="form-group">
                    <label htmlFor="newname">Bidder</label>
                    <input type="text" className="form-control" id="newname" placeholder="new cyberway name"
                        value={newname} onChange={(ev) => setNewname(ev.target.value)} />
                    <small id="bidderHelpBlock" className="form-text text-muted">
                        New cyberway name, max 12 characters. Only following characters are allowed: "12345abcdefghijklmnopqrstuvwxyz"
                </small>
                </div>
                <div className="form-group">
                    <label htmlFor="bid">Bidder</label>
                    <input type="number" min="0" className="form-control" id="bid" placeholder="bid amount"
                        value={bid} onChange={(ev) => setBid(ev.target.value)} />
                    <small id="bidderHelpBlock" className="form-text text-muted">
                        Bid amount.
                </small>
                </div>
                <Link to={"/signing?tr=" + JSON.stringify(bidname(bidder, newname, bid))} type="button" className="btn btn-primary">Sign</Link>
            </form>
            </div>
            <div>
                <pre>
                    {JSON.stringify(bids, null, 2)}
                </pre>
            </div>
        </div>

    );

}