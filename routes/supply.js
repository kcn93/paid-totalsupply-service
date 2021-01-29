const express = require('express');
const router = express.Router();
const ContractFactory = require('../utils/ContractFactory');
/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
router.get('/', async function(req, res, next) {
    try {

        const PAIDToken =  ContractFactory(req, res);

        const total = await PAIDToken.totalSupply();
        const totalSupply = JSON.parse(total) / 1e18;
        console.log(totalSupply);
        return res.status(200).json(totalSupply) // Formatear con decimales
    } catch (e) {
        console.error(e)
        return res.status(404).send('')
    }
});

router.get('/circulatingsupply', async function(req, res, next) {
    try {
        const PAIDToken =  ContractFactory(req, res);
        // Total Supply
        const total = await PAIDToken.totalSupply();
        const totalSupply = JSON.parse(total) / 1e18;
        // Some Variables
        // let ecosystem = await PAIDToken.balanceOf(process.env.ECOSYSTEM);
        // let research = await PAIDToken.balanceOf(process.env.RESEARCH);
        // let general = await PAIDToken.balanceOf(process.env.GENERAL_RESERVE);
        // let stake = await PAIDToken.balanceOf(process.env.STAKE_REWARDS);
        // const circulating = totalSupply - (ecosystem + research + general + stake);
        console.log(totalSupply);
        return res.status(200).json(totalSupply) // Formatear con decimales
    } catch (e) {
        console.error(e)
        return res.status(404).send('')
    }
});

module.exports = router;