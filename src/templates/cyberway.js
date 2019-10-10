

export function bidname(bidder, newname, bid) {
    
    return {
        "actions": [{
            "account": "cyber",
            "name": "bidname",
            "authorization": [{
                "actor": bidder,
                "permission": "active"
              }
            ],
            "data": {bidder, newname, bid:parseFloat(bid).toFixed(4) + " CYBER"}
          }
        ]
    }
}

export function bidrefund(bidder) {
  return {
      "actions": [{
          "account": "cyber",
          "name": "bidrefund",
          "authorization": [{
              "actor": bidder,
              "permission": "active"
            }
          ],
          "data": {bidder}
        }
      ]
  }
}

export function transfer(from, to, amount, asset, memo) {
  
  const quantity = parseFloat(amount).toFixed(asset.decs) + " " + asset.symbol;

  return {
      "actions": [{
          "account": "cyber.token",
          "name": "transfer",
          "authorization": [{
              "actor": from,
              "permission": "active"
            }
          ],
          "data": {from, to, quantity, memo}
        }
      ]
  }
}

