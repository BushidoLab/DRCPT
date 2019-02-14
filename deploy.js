const Web3 = require("web3");
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

(async () => {
  let accounts = await web3.eth.getAccounts();
  contract = await new web3.eth.Contract(abi).deploy({
    data: `0x${bytecode}`,
    arguments: ["DRCPT", "DRCPT", "18", "10000"]
  });
  console.log(await contract.estimateGas());

  contract = await contract.send({
    from: accounts[0],
    gas: "1700000"
  });

  console.log(
    `Contract deployed at ${contract.options.address} by ${accounts[0]}`
  );
  // await drcpt.setTransferAgent(accounts[0], true, { from: accounts[0] });

  let transferAgent = accounts[0];

  const setTransferAgentTxData = await contract.methods
    .setTransferAgent(transferAgent, true)
    .send({
      gasPrice: web3.utils.toWei("4", "Gwei"),
      from: accounts[0],
      gas: "80000"
    });
  process.exit();
})();
