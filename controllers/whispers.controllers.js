
var express = require('express');
const axios = require('axios')
const uuid4 = require("uuid")

const URL = 'http://34.74.121.25:8545';
const SUB_METHOD = "post_waku_v2_relay_v1_subscriptions";
const PUB_METHOD = "post_waku_v2_relay_v1_message";
const POLL_METHOD = "get_waku_v2_relay_v1_messages";
const options = {
    headers: {
        'Content-Type': 'application/json'
    }
}



const callServerPub = async (req, res) => {
    const {address, payload} = req.body

    if(address==null){
        return res
        .status(403)
        .json({ ok: false, message: "Left Address Wallet" });
    }

    if(payload==null){
        return res
        .status(403)
        .json({ ok: false, message: "Left payload" });
    }

    try {
        const data = {
                method: PUB_METHOD,
                jsonrpc: "2.0",
                params: [address,{payload: payload}],
                id: uuid4.v4()
            };

        const response = await axios.post(URL,data,options)
        .then(function (res) {
            let response = res.data
            return {
                id:response.id,
                result:response.result
            }
        }).catch(function (error) {
            throw error
        });
        
        return res.status(200).json({ ok: true, data: response });
    } catch (err) {
        return res
        .status(500)
        .json({ ok: false, message: err.message });
    }
};

const callServerSub = async (req, res) => {
    
    // TODO : Address List
    const {address} = req.body

    if(address==null){
        return res
        .status(403)
        .json({ ok: false, message: "Left Address Wallet" });
    }

    let addressList = []
    if(address.isArray()){
        addressList = address
    }else{
        addressList.push(address)
    }

    try {
        let data = {
            method: SUB_METHOD,
            jsonrpc: "2.0",
            params:addressList,
            id: uuid4.v4()
        }
        
        const response = await axios.post(URL,data,options)
        .then(function (res) {
            let response = res.data
            return {
                id:response.id,
                result:response.result
            }
        }).catch(function (error) {
            throw error
        });
        return res.status(200).json({ ok: true, data: response });

    } catch (err) {
        return res
        .status(500)
        .json({ ok: false, message: err.message });
    }
    
};

const callServerPoll = async (req, res) => {

    const {address} = req.body
    if(address==null){
        return res
        .status(403)
        .json({ ok: false, message: "Left Address Wallet" });
    }

    try {
        const data = {
            method: POLL_METHOD,
            jsonrpc: "2.0",
            params:[address],
            id: uuid4.v4()
        };

        const response = await axios.post(URL,data,options)
        .then(function (res) {
            let response = res.data
            return {
                id:response.id,
                result:response.result
            }
        }).catch(function (error) {
            throw error
        });

        return res.status(200).json({ ok: true, data: response });

    } catch (err) {
        return res
        .status(500)
        .json({ ok: false, message: err.message });
    }
    
};

module.exports = {
    callServerPub,
    callServerSub,
    callServerPoll
}