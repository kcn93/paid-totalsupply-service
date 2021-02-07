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
    // Get token Locked for Allocation
    const stake = await balance(PAID.PAIDTokenContract.stake_rewards, PAIDToken);
    const foundation = await balance(PAID.PAIDTokenContract.foundation, PAIDToken);
    const team = await rest(PAID.PAIDTokenContract.team_holders, PAIDToken);
    const advisors = await rest(PAID.PAIDTokenContract.advisors_holders, PAIDToken);
    const seed_a = await rest(PAID.PAIDTokenContract.seed_a, PAIDToken);
   
    const restAmount = stake + foundation + team + advisors + seed_a;
    // Check Value
    console.log(restAmount);
    return restAmount;
};

module.exports = restAmount;