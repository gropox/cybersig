import React, { useState, useEffect } from "react";
import { bidname } from "../../../templates/cyberway"
import { Link } from "react-router-dom"
import {getTableRows} from "../../../utils/cyberway";

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
    const [bids, setBids] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getTableRows(QUERY_PARAM);
                console.log(data)
                setBids(data);
            } catch(e) {

            }
        }
        fetchData();
    }, []);
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 border">
            <form>
                <div className="alert alert-primary" role="alert">
                    <h4>Bid for name</h4>
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
                    <label htmlFor="newname">New name</label>
                    <input type="text" className="form-control" id="newname" placeholder="new cyberway name"
                        value={newname} onChange={(ev) => setNewname(ev.target.value)} />
                    <small id="bidderHelpBlock" className="form-text text-muted">
                        New cyberway name, max 12 characters. Only following characters are allowed: "12345abcdefghijklmnopqrstuvwxyz"
                </small>
                </div>
                <div className="form-group">
                    <label htmlFor="bid">Bid</label>
                    <input type="number" min="0" className="form-control" id="bid" placeholder="bid amount"
                        value={bid} onChange={(ev) => setBid(ev.target.value)} />
                    <small id="bidderHelpBlock" className="form-text text-muted">
                        Bid amount.
                </small>
                </div>
                <Link to={"/signing?tr=" + JSON.stringify(bidname(bidder, newname, bid))} type="button" className="btn btn-primary">Sign</Link>
            </form>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 border mt-3">
                <div className="alert alert-primary" role="alert">
                    <h4>Bid queue</h4>
                </div>
                <table className="table table-sm table-striped table-hover">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Bidder</th>
                        <th scope="col">Bid</th>
                        <th scope="col">Bid time</th>
                    </tr>
                    </thead>
                    <tbody>
                    {bids.map(bid => {
                        return (<tr key={bid.newname} onClick={() => {setNewname(bid.newname); setBid(Math.ceil(bid.high_bid * 1.1) / 10000)}}>
                            <td>{bid.newname}</td>
                            <td>{bid.high_bidder}</td>
                            <td className="text-right">{(bid.high_bid / 10000).toFixed(4) + " CYBER" }</td>
                            <td>{bid.last_bid_time}</td>
                        </tr>

                    )})
                    
                    }
                    </tbody>
                </table>
                </div>
            </div>
        </div>

    );

}