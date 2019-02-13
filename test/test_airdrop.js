const assert = require('assert');
const Web3 = require("web3")
const abi = require("../abi");
const Tx = require("ethereumjs-tx");
// const customerAddress = require("./customerAddress")
const HDWalletProvider = require("truffle-hdwallet-provider");

const httpProvider = new Web3.providers.HttpProvider(
    "http://localhost:8545"

);

const web3 = new Web3(httpProvider);
const contractAddress = "0xe6Ca4d3890F2262e4c5dCae3f7400B76131F1757"
const contract = new web3.eth.Contract(abi, contractAddress);


describe("Aidrop", async accounts => {
    it("Should register transferAgent", async () => {
        let sender = "0x2edcc2219cc46aaeab835f024e309ff9e9186a30";
        let transferAgent = "0x2edcc2219cc46aaeab835f024e309ff9e9186a30"
        const setTransferAgent = await contract.methods
        .setTransferAgent(transferAgent, true)
        .send({
          from: sender
        });
        const checkTransferAgent = await contract.methods
        .transferAgents(transferAgent)
        .call({
        from: sender
        })
        assert.equal(checkTransferAgent, true)
    })


})