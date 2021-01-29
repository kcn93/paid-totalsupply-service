import { ethers } from 'ethers';
import { PAIDTokenContract } from './../contracts/paidtoken';

export const ContractFactory = () => {
    try {
        // This can be an address or an ENS name
        const address = PAIDTokenContract.address;
        // An Instance of Provider
        const provider = ethers.getDefaultProvider();
        // An Instance of Signer
        const signer = ethers.Wallet.createRandom().connect(provider);
        // Read-Only; By connecting to a Provider, allows:
        // - Any constant function
        // - Querying Filters
        // - Populating Unsigned Transactions for non-constant methods
        // - Estimating Gas for non-constant (as an anonymous sender)
        // - Static Calling non-constant methods (as anonymous sender)
        const erc20 = new ethers.Contract(address, abi, provider);
        return erc20;
    } catch {
        console.error(e)
        return res.status(400).send('Error Create Instance of Contract Token')
    }
};