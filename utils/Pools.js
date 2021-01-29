const Pools = () => {
    const TokenContract = require('./../contracts/paidtoken.js');

    // This can be an address or an ENS name
    const ecosystem = TokenContract.PAIDTokenContract.address["ecosystem"];
    const research = TokenContract.PAIDTokenContract.address["research"];
    const general_reserve = TokenContract.PAIDTokenContract.address["general_reserve"];
    const stake_rewards = TokenContract.PAIDTokenContract.address["stake_rewards"];
    const contractors = TokenContract.PAIDTokenContract.address["contractors"];
    return pools = {
        ecosystem,
        research,
        general_reserve,
        stake_rewards,
        contractors
    }
};

module.exports = Pools;