const ContractFactory = (res, req) => {
    const ethers = require('ethers');
    const TokenContract = require('./../contracts/paidtoken.js');
    try {
        // This can be an address or an ENS name
        const address = TokenContract.PAIDTokenContract.address["mainnet"];
        // An Instance of Abi Files
        const abi = TokenContract.PAIDTokenContract.raw.abi;
        // An Instance of Provider
        const provider = ethers.getDefaultProvider();
        // Read-Only; By connecting to a Provider, allows:
        // - Any constant function
        // - Querying Filters
        // - Populating Unsigned Transactions for non-constant methods
        // - Estimating Gas for non-constant (as an anonymous sender)
        // - Static Calling non-constant methods (as anonymous sender)
        const erc20 = new ethers.Contract(address, abi, provider);
        return erc20;
    } catch (err) {
        console.error(err);
        return res.status(400).send('Error Create Instance of Contract Token');
    }
};

module.exports = ContractFactory;
