const express = require('express');
const router = express.Router();
const ContractFactory = require('../utils/ContractFactory');
const restAmount = require('../utils/restAmount');
const totalSupply = require('../utils/totalSupply');
// Caching
const NodeCache = require( "node-cache" );
const myCache = new NodeCache( { stdTTL: 300, checkperiod: 350 } );
// Global Variable
let PAIDToken = null;
let oldTotalSupply = process.env.APP_TOTAL_SUPPLY;
let oldRestAmount = process.env.APP_REST_AMOUNT;
let updatingTotal = false;
let updatingRest = false;

// Get Instance of PAIDToken
const getInstancePAIDToken = (req, res) => {
  if ((PAIDToken === null) || (PAIDToken === undefined)) {
    PAIDToken =  ContractFactory(req, res);
    console.log("Get Instance");
  }
}

// Async function to Update Total Supply
const updateTotalSupply = async (PAIDToken) => {
  if (!updatingTotal) {
    updatingTotal = true;
    console.log('Update Total Supply');
    // Get Total Supply
    const Total = await totalSupply(PAIDToken);
    // assign to Cache
    const successTS = myCache.set("TotalSupply",Total, 300);
    console.log('Total Supply TS', Total);
    if (successTS) {
      oldTotalSupply = Total;
      console.log('Total Supply Updated');
      updatingTotal = false;
      return true;
    } else {
      throw new Error('Error to Set Cache');
    }
  } else {
    console.log('TotalSupply Updating');
    return false;
  }
}
// Async function to Update Total Supply and Circulating Supply
const updateCirculatingSupply = async (PAIDToken) => {
  if (!updatingRest) {
    updatingRest = true;
    console.log('Update Circulating Supply');
    // Get Total Supply
    const Total = await totalSupply(PAIDToken);
    // assign to Cache
    const success_t = myCache.set("TotalSupply",Total, 300);
    console.log('Total Supply CS', Total);
    // Get Rest Amount Token
    const Rest = await restAmount(PAIDToken);
    // assign to Cache
    const success_r = myCache.set("RestAmount",Rest, 300);
    if (success_t && success_r) {
      oldTotalSupply = Total;
      oldRestAmount = Rest;
      console.log("Set Total and RestAmount and Circulating Supply Updated", Total, Rest, oldTotalSupply, oldRestAmount);
      updatingRest = false;
      return true;
    } else {
      throw new Error('Error to Set Cache');
    }
  } else {
    console.log('TotalSupply and RestAmount Updating');
    return false;
  }
}

/* GET home page and Initialize Value of Total Supply and Circulating Supply*/
router.get('/', async function(req, res, next) {
  res.render('index', { title: 'API REST from PAID Token to get Update for TotalSupply and CirculatingSupply' });
  // Get Instance of PAIDToken Contract if no exist!!
  getInstancePAIDToken(req, res);
  // Async function to Update Total Supply and Circulating Supply
  const success = await updateCirculatingSupply(PAIDToken);
  if (success) {
    console.log('correctly initialized values');
  } else {
    console.log('initialized values in progressing...');
  }
});

/**
 * Responds to TotalSupply HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
router.get('/totalsupply', async function(req, res) {
  try {
      let TotalSupply = oldTotalSupply;
      // Get Instance of PAIDToken Contract if no exist!!
      getInstancePAIDToken(req, res);
      // Event for Expired TotalSupply Value
      myCache.on( "expired", async function( key, value ){
        console.log('Expire TotalSupply');
        // Store OldValue
        if (key === 'TotalSupply') {
          oldTotalSupply = value;
          console.log('oldTotalSupply', oldTotalSupply);
        };
        // Update Total Supply
        updateTotalSupply(PAIDToken);
      });
      // Async function to Update Total Supply
      TotalSupply = myCache.get("TotalSupply");
      if (TotalSupply == undefined) {
        console.log('Error Get Cache');
        TotalSupply = oldTotalSupply;
        // Async function to Update Total Supply
        updateTotalSupply(PAIDToken);
      };
      // Verify Value
      console.log("End Point TotalSupply",TotalSupply);
      return res.status(200).type('text/plain').send(TotalSupply.toString());
  } catch (e) {
      console.error(e)
      return res.status(404).send('')
  }
});

/**
 * Responds to Circulating Supply HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
router.get('/circulatingsupply', async function(req, res) {
  try {
    let TotalSupply = oldTotalSupply;
    let RestAmount = oldRestAmount;
    // Get Instance of PAIDToken Contract if no exist!!
    getInstancePAIDToken(req, res);
    // Event for Expired TotalSupply and RestAmount Value
    myCache.on( "expired", async function( key, value ){
      console.log('Expire CirculatingSupply');
      // Store OldValue
      if (key === 'TotalSupply') {
        oldTotalSupply = value;
        console.log('oldTotalSupply', oldTotalSupply);
      };
      if (key === 'RestAmount') {
        oldRestAmount = value;
        console.log('oldRestAmount', oldRestAmount);
      };
      // Async function to Update Total Supply and Circulating Supply
      updateCirculatingSupply(PAIDToken);
    });
    // Get Total Supply from Cache
    TotalSupply = myCache.get("TotalSupply");
    RestAmount = myCache.get("RestAmount");
    if ((TotalSupply === undefined) || (RestAmount === undefined)) {
      console.log('Error Get Cache');
      TotalSupply = oldTotalSupply;
      RestAmount = oldRestAmount;
      // Async function to Update Total Supply and Circulating Supply
      updateCirculatingSupply(PAIDToken);
    };
    // Calculate Circulating
    const circulatingSupply = TotalSupply - RestAmount;
    // Verify Value
    console.log("EndPoint CirculatingSupply", circulatingSupply);
    return res.status(200).type('text/plain').send(circulatingSupply.toString());
  } catch (e) {
      console.error(e)
      return res.status(404).send('')
  }
});

module.exports = router;