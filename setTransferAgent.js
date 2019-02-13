const Web3 = require("web3")
const abi = require("./abi");
const Tx = require("ethereumjs-tx");
const customerAddress = require("./customerAddress")
const HDWalletProvider = require("truffle-hdwallet-provider");

const httpProvider = new Web3.providers.HttpProvider(
    "http://localhost:8545"

);

const web3 = new Web3(httpProvider);



(async () => {
    const contractAddress = "0x8847A0A56aB03B9E9B00FD8BBcFa65697f4D961B";
    const contract = new web3.eth.Contract(abi, contractAddress);

    const sender = "0x489b5af551dde981bf08729eac0d76d9049f7c13";
    let transferAgent = "0x489b5af551dde981bf08729eac0d76d9049f7c13"
    const setTransferAgentTxData = await contract.methods
    .setTransferAgent(transferAgent, true)
    .send({
      from: sender
    });

})();;