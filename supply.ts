const contracts = require('name_of_contract')
/**
 * Responds to any HTTP request.
 * 
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
  
exports.v3totalSupply = async (_req, res) => {
  try {

    const PaidToken = contracts.PaidToken
    const thorify = require('thorify').thorify
    const Web3 = require('web3')
    const web3 = thorify(new Web3(), 'https://path/to/web')

    const PaidTokenContract = new web3.eth.Contract(
      PaidToken.raw.abi,
      PaidToken.address['0x4a']
    )

    let totalSupply = await PaidTokenContract.methods
      .totalSupply()
      .call()
    return res.json({ totalSupply })
  } catch (e) {
    console.error(e)
    return res.status(400).send('')

  }

}  
  

 