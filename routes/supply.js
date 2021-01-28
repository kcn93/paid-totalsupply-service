const contracts = require('name_of_contract')
/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
router.post('/reject-agreement', function(req, res, next) {
exports.v3totalSupply = async(_req, res) => {
    const TOKEN_URL = '0x8c8687fc965593dfb2f0b4eaefd55e9d8df348df';
    try {
        const Web3 = require('web3')
        const web3 = new Web3(URL);

        const token = new web3.eth.Contract(
            VANILLA_ERC_20_ABI,
            TOKEN_URL
        )

        let totalSupply = await token.methods
            .totalSupply()
            .call()
        return res.send(totalSupply.toFixed(8)) // Formatear con decimales
    } catch (e) {
        console.error(e)
        return res.status(400).send('')
    }
}

module.exports = router;