# Cybersig

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

[Click to try this example](https://gropox.github.io/cybersig/?tr=%7B"actions"%3A%5B%7B"account"%3A"cyber.token"%2C"name"%3A"transfer"%2C"authorization"%3A%5B%7B"actor"%3A"zhm555xmzkd3"%2C"permission"%3A"active"%7D%5D%2C"data"%3A%7B"from"%3A"zhm555xmzkd3"%2C"to"%3A"ropox"%2C"quantity"%3A"1.0000+CYBER"%2C"memo"%3A"Memo+text"%7D%7D%5D%7D)
