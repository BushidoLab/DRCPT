const Web3 = require("web3")
const abi = require("./abi");
const Tx = require("ethereumjs-tx");
const customerAddress = require("./customerAddress")
const HDWalletProvider = require("truffle-hdwallet-provider");

// const httpProvider = new Web3.providers.HttpProvider(
//     // "https://ropsten.infura.io/m62CiajFe86L4iYN20tw"
//     "http://localhost:8545"

// );

const provider = new HDWalletProvider(
    "lens taxi version whip grief usage void sunny country wrap account siren",
    "http://localhost:8545"
  );

const web3 = new Web3(provider);



(async () => {
    const contractAddress = "0xcAC267e097b18b3f61C2A0e515C6fd4D496Fc811";
    const contract = new web3.eth.Contract(abi, contractAddress);

    // let pkey = "2afcac86f6c67bf2bb6e764430ab7c0c9b3bd19ad99b5b893ea327e4e070b078";
    // let privateKey = Buffer.from(pkey, "hex");
    // const sender = "0xf0296732fc21d32AB29B6618200a1DFC6dE140A0";
    let gaspriceWei = web3.utils.toWei("19", "Gwei");

    const accounts = web3.eth.getAccounts();
    
    console.log(accounts[0])



})();;