// Convert wei to Ether
const weiToDecimal = (value) => {
    return JSON.parse(value) / 1e18;
}

const totalSupply = async (PAIDToken) => {
    const total = await PAIDToken.totalSupply();
    return weiToDecimal(total);
}

module.exports = totalSupply;