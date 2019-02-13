const Web3 = require("web3")
const abi = require("./abi");
const Tx = require("ethereumjs-tx");
const customerAddress = require("./customerAddress")
const HDWalletProvider = require("truffle-hdwallet-provider");

const httpProvider = new Web3.providers.HttpProvider(
    // "https://ropsten.infura.io/m62CiajFe86L4iYN20tw"
    "http://localhost:8545"

);

// const provider = new HDWalletProvider(
//     "lens taxi version whip grief usage void sunny country wrap account siren",
//     "http://localhost:8545"
//   );

const web3 = new Web3(httpProvider);



(async () => {
    const contractAddress = "0x8847A0A56aB03B9E9B00FD8BBcFa65697f4D961B";
    const contract = new web3.eth.Contract(abi, contractAddress);

    // let pkey = "2afcac86f6c67bf2bb6e764430ab7c0c9b3bd19ad99b5b893ea327e4e070b078";
    // let privateKey = Buffer.from(pkey, "hex");
    const sender = "0x489b5af551dde981bf08729eac0d76d9049f7c13";
    let transferAgent = "0x5adf4097172780c13b1af323e34cfd429d0c4134"
    const setTransferAgentTxData = await contract.methods
    .transferAgents(transferAgent)
    .call({
      from: sender
    }).then((res) => {
        console.log(res)
    })

})();;