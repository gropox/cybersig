
import { JsonRpc, Api } from 'cyberwayjs';
import { TextEncoder, TextDecoder } from 'text-encoding';
import JsSignatureProvider from 'cyberwayjs/dist/eosjs-jssig';
import crypto from "crypto";
import axios from "axios";

import bs58 from "bs58";

const HOST = 'https://node-cyberway.golos.io';
const HOST3 = 'http://localhost:8888';

export async function sendTransaction(keys, trx, host) {
  const rpc = new JsonRpc(HOST);
  const signatureProvider = new JsSignatureProvider(keys);

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

export async function getTableRows(data) {
  
    const rpc = new JsonRpc(HOST, { fetch });  

    const resp = await rpc.get_table_rows(data);
    if(resp.rows) {
      return resp.rows;
    }
    return [];
}
