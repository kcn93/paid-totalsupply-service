const express = require('express');
const router = express.Router();
const ContractFactory = require('../utils/ContractFactory');
const Pools = require('../utils/Pools');
/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
router.get('/', async function(req, res, next) {
    try {
        // Get ERC Instance
        const PAIDToken =  ContractFactory(req, res);
        // Get Total Supply
        const total = await PAIDToken.totalSupply();
        // Transform Total Supply
        const totalSupply = Intl.NumberFormat("en-US").format(JSON.parse(total) / 1e18);
        console.log(totalSupply);
        return res.status(200).json(totalSupply) // Formatear con decimales
    } catch (e) {
        console.error(e)
        return res.status(404).send('')
    }
});

router.get('/circulatingsupply', async function(req, res, next) {
    try {
        // Get ERC Instance
        const PAIDToken =  ContractFactory(req, res);
        // Get Total Supply
        const total = await PAIDToken.totalSupply();
        // Convert totalsupply
        const totalSupply  = JSON.parse(total) / 1e18
        // Get EcoSystem and Referrals
        const ecosystem_balance = await PAIDToken.balanceOf(Pools().ecosystem);
        // Get Research
        const research_balance = await PAIDToken.balanceOf(Pools().research);
        // Get General Balance
        const general_balance = await PAIDToken.balanceOf(Pools().general_reserve);
        // Get Stake Rewards
        const stake_balance = await PAIDToken.balanceOf(Pools().stake_rewards);
        // Get Contractors
        const contractors_balance = await PAIDToken.balanceOf(Pools().contractors);
        // Adapt Value
        const ecosystem = JSON.parse(ecosystem_balance) / 1e18;
        // Adapt Value
        const research = JSON.parse(research_balance) / 1e18;
        // Adapt Value
        const general = JSON.parse(general_balance) / 1e18;
        // Adapt Value
        const stake = JSON.parse(stake_balance) / 1e18;
        // Adapt Value
        const contractors = JSON.parse(contractors_balance) / 1e18;
        // Calculate Circulating
        const circulating = totalSupply - (ecosystem + research + general + stake + contractors);
        // Adapt American Numeric Format
        const circulatingSupply = Intl.NumberFormat("en-US").format(circulating);
        console.log(circulatingSupply);
        return res.status(200).json(circulatingSupply) // Formatear con decimales
    } catch (e) {
        console.error(e)
        return res.status(404).send('')
    }
});

module.exports = router;