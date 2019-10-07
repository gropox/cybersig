

export function bidname(bidder, newname, bid) {
    
    return {
        "actions": [{
            "account": "cyber",
            "name": "bidname",
            "authorization": [{
                "actor": "zhm555xmzkd3",
                "permission": "active"
              }
            ],
            "data": {bidder, newname, bid:parseFloat(bid).toFixed(4) + " CYBER"}
          }
        ]
    }
}


