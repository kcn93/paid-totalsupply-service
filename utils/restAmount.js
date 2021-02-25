// require of Contract and Token
const PAID = require('../contracts/paidtoken.js');
const ethereumRegex = require('ethereum-regex')
// Convert wei to Ether
const weiToDecimal = (value) => {
    return JSON.parse(value) / 1e18;
}
// Get Balance Of for each address
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
// Get Token Unlocked for each Address
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
    // Get token Locked for Allocation of PAID Network Foundation
    const stake = await balance(PAID.PAIDTokenContract.stake_rewards, PAIDToken);
    console.log('Finished stake ', stake);
    const foundation = await balance(PAID.PAIDTokenContract.foundation, PAIDToken);
    console.log('Finished foundation ', foundation);
    const team = await rest(PAID.PAIDTokenContract.team_holders, PAIDToken);
    console.log('Finished team ', team);
    const advisors = await rest(PAID.PAIDTokenContract.advisors_holders, PAIDToken);
    console.log('Finished advisors ', advisors);
    // Sales Allocation
    const seed_a = await rest(PAID.PAIDTokenContract.seed_a, PAIDToken);
    console.log('Finished seed_a ', seed_a);
    const seed_b = await rest(PAID.PAIDTokenContract.seed_b, PAIDToken);
    console.log('Finished seed_b ', seed_b);
    const private_a1 = await rest(PAID.PAIDTokenContract.private_a1, PAIDToken);
    console.log('Finished private_a1 ', private_a1);
    const private_a2 = await rest(PAID.PAIDTokenContract.private_a2, PAIDToken);
    console.log('Finished private_a2 ', private_a2);
    const private_a3 = await rest(PAID.PAIDTokenContract.private_a3, PAIDToken);
    console.log('Finished private_a3 ', private_a3);
    const private_a4 = await rest(PAID.PAIDTokenContract.private_a4, PAIDToken);
    console.log('Finished private_a4 ', private_a4);
    const private_a5 = await rest(PAID.PAIDTokenContract.private_a5, PAIDToken);
    console.log('Finished private_a5 ', private_a5);
    const private_a6 = await rest(PAID.PAIDTokenContract.private_a6, PAIDToken);
    console.log('Finished private_a6 ', private_a6);
    const private_a7 = await rest(PAID.PAIDTokenContract.private_a7, PAIDToken);
    console.log('Finished private_a7 ', private_a1);
    const private_b = await rest(PAID.PAIDTokenContract.private_b, PAIDToken);
    console.log('Finished private_b ', private_b);
    const public_1 = await rest(PAID.PAIDTokenContract.public_1, PAIDToken);
    console.log('Finished public_1 ', public_1);
    const public_2 = await rest(PAID.PAIDTokenContract.public_2, PAIDToken);
    console.log('Finished public_2 ', public_2);
    const public_3 = await rest(PAID.PAIDTokenContract.public_3, PAIDToken);
    console.log('Finished public_3 ', public_3);
    const public_4 = await rest(PAID.PAIDTokenContract.public_4, PAIDToken);
    console.log('Finished public_4 ', public_4);
    // const public_5 = await rest(PAID.PAIDTokenContract.public_5, PAIDToken);
    const public_6 = await rest(PAID.PAIDTokenContract.public_6, PAIDToken);
    console.log('Finished public_6 ', public_6);
    const public_7 = await rest(PAID.PAIDTokenContract.public_7, PAIDToken);
    console.log('Finished public_7 ', public_7);
    // UNISWAP Token   
    const exchange = await balance(PAID.PAIDTokenContract.exchange, PAIDToken);
    console.log('exchange:', exchange);
    // Get Allocations
    const seed = seed_a + seed_b;
    const private = private_a1 + private_a2 + private_a3 + private_a4 + private_a5 + private_a6 + private_a7 + private_b;
    const public = public_1 + public_2 + public_3 + public_4 + public_6 + public_7+ exchange;
    const allocation = seed + private + public;
    // Get Totally RestAmount
    const restAmount = stake + foundation + team + advisors + allocation;
    // Check Value
    console.log('RestAmount', restAmount);
    return restAmount;
};

module.exports = restAmount;