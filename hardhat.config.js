require('@nomiclabs/hardhat-solhint');
require('@nomiclabs/hardhat-waffle');

require('dotenv').config(); //import your keys

const RINKEBY_PROVIDER_API_KEY = process.env.RINKEBY_PROVIDER_API_KEY;
const ACCOUNT_PRIVATE_KEY = process.env.ACCOUNT_PRIVATE_KEY;

module.exports = {
  solidity: '0.8.10',
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${RINKEBY_PROVIDER_API_KEY}`,
      accounts: [`${ACCOUNT_PRIVATE_KEY}`],
    },
  },
};
