require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remember erosion heavy clock bubble slim'; 
let testAccounts = [
"0x5de36063a0a0153ed71a6ae8e6997fc5a47c59b3dbedd6a529ccd45fa5f86d6f",
"0x55778d1463427488dfe606d01e2cb6faeec9d0aa6116fb56194a3c7dd4de24b5",
"0x7bf6a6f0af84208c9df5f6a0b67b7743d5ecd19e276015c85de6b380dc342c7c",
"0x3c4ab888e8dc492bb25870114722165c92c4f485da1cd9c3042b0bfb0d950410",
"0xe7f222f699ac795024d87398a2b1d8303aa0e645295ab43d195bb9d46386e5cc",
"0x7ebe04538838a37824bb1bca8e8a44993a72ae28b63bc93d91da1e85f2718383",
"0xb4c5477d9b3273406dd3508125c1a820f5211241041cac29daa6d27cfce7e496",
"0xbe8e52bae8cc513ed5cf2543bcc4365fb77b347368e368f676a13cb76191d2da",
"0x37d326c5ea36158462a94edd75ea98ff05cbebda044b9245e2e2cd175da5cb3d",
"0x77a85545d65783e46f60c02f7005140504a46675474dabfe1ee897ad9e021632"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

