// require of Contract and Token
const PAID = require('../contracts/paidtoken.js');
const ethereumRegex = require('ethereum-regex')
// Convert wei to Ether
const weiToDecimal = (value) => {
    return JSON.parse(value) / 1e18;
}

const balance = async (arr, PAIDToken) => {
    if (Object.prototype.toString.call(arr) === '[object Array]') {
        let total = 0;
        for await (let address of arr) {
            if (ethereumRegex({exact:true}).test(address)) {
                total = total + weiToDecimal(await PAIDToken.balanceOf(address));
            } else {
                throw new Error('All elements in array must be ethereum address');
            }
        }
        return total;
    } else {
        throw new Error('Input must be of type Array');
    }
}

const rest = async (arr, PAIDToken) => {
    if (Object.prototype.toString.call(arr) === '[object Array]') {
        let total = 0;
        for await (let address of arr) {
            if (ethereumRegex({exact:true}).test(address)) {
                total = total + weiToDecimal(await PAIDToken.getRestAmount(address));
            } else {
                throw new Error('All elements in array must be ethereum address');
            }
        }
        return total;
    } else {
        throw new Error('Input must be of type Array');
    }
}

const restAmount = async (PAIDToken) => {
    // This can be an address or an ENS name
    const foundation = await balance(PAID.PAIDTokenContract.foundation, PAIDToken);
    const team = await rest(PAID.PAIDTokenContract.team_holders, PAIDToken);
    const advisors = await rest(PAID.PAIDTokenContract.advisors_holders, PAIDToken);
    // // Get EcoSystem and Referrals, Research, General Balance, Stake Rewards, Contractors
    // const ecosystem_balance = await PAIDToken.balanceOf(ecosystem_addr);
    // const research_balance = await PAIDToken.balanceOf(research_addr);
    // const general_balance = await PAIDToken.balanceOf(general_reserve_addr);
    // const stake_balance = await PAIDToken.balanceOf(stake_rewards_addr);
    // const contractors_balance = await PAIDToken.balanceOf(contractors_addr);
    // Total Token Under Control of PAID Network Foundation
    // const foundation = (weiToDecimal(ecosystem_balance) + weiToDecimal(research_balance) + weiToDecimal(general_balance) + weiToDecimal(stake_balance) + weiToDecimal(contractors_balance));
    const restAmount = foundation + team + advisors;
    // Check Value
    console.log(restAmount);
    return restAmount;
};

module.exports = restAmount;