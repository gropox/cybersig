# Cybercig

This is a simple signing tool for cyberway. In order to use it, please supply parameter "tr" in url with a valid transaction object.

For example below is a transaction including transfer action

```
https://gropox.github.io/cybersig?tr={
    "actions": [
        {
            "account": "cyber.token",
            "name": "transfer",
            "authorization": [
                {
                    "actor": "zhm555xmzkd3",
                    "permission": "active"
                }
            ],
            "data": {
                "from": "zhm555xmzkd3",
                "to": "ropox",
                "quantity": "1.0000 CYBER",
                "memo": "Memo text"
            }
        }
    ]
}
```

[Click to try this example](https://gropox.github.io/cybersig?tr={"actions":[{"account":"cyber.token","name":"transfer","authorization":[{"actor":"zhm555xmzkd3","permission": "active"}],"data":{"from": "zhm555xmzkd3","to": "ropox","quantity": "1.0000 CYBER","memo": "Memo text"}}]})
