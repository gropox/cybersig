
import { JsonRpc, Api } from 'cyberwayjs';
import { TextEncoder, TextDecoder } from 'text-encoding';
import JsSignatureProvider from 'cyberwayjs/dist/eosjs-jssig';
import crypto from "crypto";
import axios from "axios";

import bs58 from "bs58";

const HOST = 'https://node-cyberway.golos.io';

export async function sendTransaction(key, trx, host) {
  const rpc = new JsonRpc(host || HOST);
  const signatureProvider = new JsSignatureProvider([key]);

  const api = new Api({
    rpc,
    signatureProvider,
    textDecoder: new TextDecoder(),
    textEncoder: new TextEncoder(),
  });

  const results = await api.transact(trx, {
    blocksBehind: 5,
    expireSeconds: 3600,
  });

  console.log("sendgtransaction: results", results);
  return results;
}


export function isWif(privWif) {
  var isWif = false;
  const sha256 = (inp) => {
    return crypto.createHash("sha256").update(inp).digest();
  }
  try {
    var bufWif = new Buffer(bs58.decode(privWif));
    var privKey = bufWif.slice(0, -4);
    var checksum = bufWif.slice(-4);
    var newChecksum = sha256(privKey);
    newChecksum = sha256(newChecksum);
    newChecksum = newChecksum.slice(0, 4);
    if (checksum.toString() == newChecksum.toString()) {
      isWif = true;
    }
  } catch (e) {
  }
  return isWif;
};

export async function sendRequest(uri, data) {
  
    const myRequest = new Request(HOST + uri, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

    const response = await fetch(myRequest);
      console.log(uri, data, response);
      if(!response.ok) {
          return {}
      }
      return await response.json();
  
/*
  return new Promise((resolve,reject) => {
    var url = 'https://node-cyberway.golos.io/v1/chain/get_table_rows';

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onload = function () {
      console.log(xhr);
      resolve(xhr.response);
    };

    xhr.onerror = function () {
      console.log(xhr)
      reject(Error("error xhr"))
    };

    xhr.send(JSON.stringify(data));
  });
  */
}
