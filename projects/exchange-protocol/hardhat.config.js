/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require ("@nomiclabs/hardhat-ethers");
require ("@nomiclabs/hardhat-web3");
require ("@nomiclabs/hardhat-waffle");
require ("@nomiclabs/hardhat-truffle5");
require ("hardhat-abi-exporter");
require ("hardhat-contract-sizer");
require ("solidity-coverage");
require ("dotenv/config");

const { PrivateKey } = require('./secret.json');

module.exports = {
  defaultNetwork: 'testnet',

  networks: {
     hardhat: {
     },
     testnet: {
        url: 'https://rpc.test.btcs.network',
        accounts: [PrivateKey],
        chainId: 1115,
     }
  },
  solidity: {
    compilers: [
      {
        version: "0.8.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 99999,
          },
        },
      },
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 99999,
          },
        },
      },
      {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 99999,
          },
        },
      },
      {
        version: "0.4.18",
        settings: {
          optimizer: {
            enabled: true,
            runs: 99999,
          },
        },
      },
    ],
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  abiExporter: {
    path: "./data/abi",
    clear: true,
    flat: false,
  },
};
