const Web3 = require("web3");
const customerAddresses = require("./customerAddress");
const abi = require("./abi");
const bytecode = require("./bytecode");
const HDWalletProvider = require("truffle-hdwallet-provider");

const mnemonic =
  "brand accuse source mesh guilt version siren risk electric proof bulb time";

const provider = new HDWalletProvider(
  mnemonic,
  "http://localhost:8545", // "https://ropsten.infura.io/m62CiajFe86L4iYN20tw"
  0,
  5
);
const web3 = new Web3(provider);

const contractAddress = "0x1DA736834ACD895b4f8363454D747096A0Ea99d3";

(async () => {
  const contract = new web3.eth.Contract(abi, contractAddress);
  const accounts = await web3.eth.getAccounts();

  const addressToSet = accounts[1];
  console.log("Settings ", addressToSet, "as transfer agent");

  const setTransferAgentTxData = await contract.methods
    .setTransferAgent(addressToSet, true)
    .send({
      gasPrice: web3.utils.toWei("4", "Gwei"),
      from: accounts[0],
      gas: "80000"
    });
  process.exit();
})();
