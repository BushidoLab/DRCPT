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

  for (let i = 0; i < customerAddresses.length; i++) {
    const addressInfo = customerAddresses[i];
    console.log("Sending ", addressInfo.amount, "tokens to", addressInfo.to);

    const tx = await contract.methods
      .transfer(addressInfo.to, addressInfo.amount)
      .send({
        from: accounts[0],
        gas: "85000"
      });
  }
  process.exit();
})();
