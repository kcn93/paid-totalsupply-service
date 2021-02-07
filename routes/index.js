const express = require('express');
const router = express.Router();
const ContractFactory = require('../utils/ContractFactory');
const restAmount = require('../utils/restAmount');
const totalSupply = require('../utils/totalSupply');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'API REST from PAID Token to get Update for TotalSupply and CirculatingSupply' });
});

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
router.get('/totalsupply', async function(req, res) {
  try {
      // Get ERC20 Instance
      const PAIDToken =  ContractFactory(req, res);
      // Get Total Supply
      const TotalSupply = await totalSupply(PAIDToken);
      console.log(TotalSupply);
      return res.status(200).type('text/plain').send(TotalSupply.toString()) // Formatear con decimales
  } catch (e) {
      console.error(e)
      return res.status(404).send('')
  }
});

router.get('/circulatingsupply', async function(req, res) {
  try {
      // Get ERC20 Instance
      const PAIDToken =  ContractFactory(req, res);
      // Get Total Supply
      const TotalSupply = await totalSupply(PAIDToken);
      // Get Rest Amount Token
      const RestAmount = await restAmount(PAIDToken);
       // Calculate Circulating
      const circulatingSupply = TotalSupply - RestAmount;
      // Adapt American Numeric Format
      console.log(circulatingSupply);
      return res.status(200).type('text/plain').send(circulatingSupply.toString()) // Formatear con decimales
  } catch (e) {
      console.error(e)
      return res.status(404).send('')
  }
});

module.exports = router;