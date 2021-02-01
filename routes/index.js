const express = require('express');
const router = express.Router();
const ContractFactory = require('../utils/ContractFactory');
const Pools = require('../utils/Pools');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'API' });
});

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
router.get('/totalsupply', async function(req, res, next) {
  try {
      // Get ERC Instance
      const PAIDToken =  ContractFactory(req, res);
      // Get Total Supply
      const total = await PAIDToken.totalSupply();
      // Transform Total Supply
      // const totalSupply = Intl.NumberFormat("en-US").format(JSON.parse(total) / 1e18);
      const totalSupply = JSON.parse(total) / 1e18;
      console.log(totalSupply);
      return res.status(200).type('text/html').send(totalSupply.toString()) // Formatear con decimales
  } catch (e) {
      console.error(e)
      return res.status(404).send('')
  }
});

router.get('/circulatingsupply', async function(req, res, next) {
  try {
      // Get ERC20 Instance
      const PAIDToken =  ContractFactory(req, res);
      // Get Total Supply
      const total = await PAIDToken.totalSupply();
      // Convert totalsupply
      const totalSupply  = JSON.parse(total) / 1e18
      // Get EcoSystem and Referrals, Research, General Balance, Stake Rewards, Contractors
      const ecosystem_balance = await PAIDToken.balanceOf(Pools().ecosystem);
      const research_balance = await PAIDToken.balanceOf(Pools().research);
      const general_balance = await PAIDToken.balanceOf(Pools().general_reserve);
      const stake_balance = await PAIDToken.balanceOf(Pools().stake_rewards);
      const contractors_balance = await PAIDToken.balanceOf(Pools().contractors);
      // Convert Value wei to decimal
      const ecosystem = JSON.parse(ecosystem_balance) / 1e18;
      const research = JSON.parse(research_balance) / 1e18;
      const general = JSON.parse(general_balance) / 1e18;
      const stake = JSON.parse(stake_balance) / 1e18;
      const contractors = JSON.parse(contractors_balance) / 1e18;
      // Calculate Circulating
      const circulatingSupply = totalSupply - (ecosystem + research + general + stake + contractors);
      // Adapt American Numeric Format
      // const circulatingSupply = Intl.NumberFormat("en-US").format(circulating);
      console.log(circulatingSupply);
      return res.status(200).type('text/html').send(circulatingSupply.toString()) // Formatear con decimales
  } catch (e) {
      console.error(e)
      return res.status(404).send('')
  }
});

module.exports = router;