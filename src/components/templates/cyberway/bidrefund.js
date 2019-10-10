import React, { useState, useEffect } from "react";
import { bidrefund } from "../../../templates/cyberway"
import { Link } from "react-router-dom"

export default
    function BidName(props) {

    const [bidder, setBidder] = useState("");

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 border">
                    <form>
                        <div className="alert alert-primary" role="alert">
                            <h4>Refund lost bids</h4>
                        </div>

                        <div className="form-group">
                            <label htmlFor="bidder">Bidder</label>
                            <input type="text" className="form-control" id="bidder" placeholder="cyberway account"
                                value={bidder} onChange={(ev) => setBidder(ev.target.value)} />
                            <small id="bidderHelpBlock" className="form-text text-muted">
                                Cyberway account
                            </small>
                        </div>
                        <Link to={"/signing?tr=" + JSON.stringify(bidrefund(bidder))} type="button" className="btn btn-primary">Sign</Link>
                    </form>
                </div>
            </div>
        </div>

    );

}