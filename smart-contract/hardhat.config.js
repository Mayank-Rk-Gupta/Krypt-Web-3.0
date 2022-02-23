// https://eth-ropsten.alchemyapi.io/v2/W9EIpRx10M4jyi9oGAUgduMjwXe-Kbdf
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/W9EIpRx10M4jyi9oGAUgduMjwXe-Kbdf',
      accounts: ['6aff78961f2c241eaa83156a3bd9418997efe4eb1bb85d4c7165e44b80281223'],
    },
  },
};