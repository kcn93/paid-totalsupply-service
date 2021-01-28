import { ContractFactory } from '../utils/ContractFactory';

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
router.post('/totalsupply', function(req, res, next) {
    try {

        const PAIDToken =  ContractFactory();

        let totalSupply = await PAIDToken.methods
            .totalSupply()
            .call()
        return res.send(totalSupply.toFixed(8)) // Formatear con decimales
    } catch (e) {
        console.error(e)
        return res.status(400).send('')
    }
});

router.post('/circulatingsupply', function(req, res, next) {
    try {
        const PAIDToken =  ContractFactory();

        let totalSupply = await PAIDToken.methods
            .totalSupply()
            .call()
        return res.send(totalSupply.toFixed(8)) // Formatear con decimales
    } catch (e) {
        console.error(e)
        return res.status(400).send('')
    }
});

module.exports = router;