const Web3 = require("web3")
const abi = require("./abi");
const Tx = require("ethereumjs-tx");
const customerAddress = require("./customerAddress")

const httpProvider = new Web3.providers.HttpProvider(
    // "https://ropsten.infura.io/m62CiajFe86L4iYN20tw"
    "http://localhost:8545"

);
const web3 = new Web3(httpProvider);


const contractAddress = "0xcAC267e097b18b3f61C2A0e515C6fd4D496Fc811";

(async () => {
    const contract = new web3.eth.Contract(abi, contractAddress);

    let pkey = "2afcac86f6c67bf2bb6e764430ab7c0c9b3bd19ad99b5b893ea327e4e070b078";
    let privateKey = Buffer.from(pkey, "hex");
    const sender = "0xf0296732fc21d32AB29B6618200a1DFC6dE140A0";
    let gaspriceWei = web3.utils.toWei("19", "Gwei");
    
    let _nonce = await web3.eth.getTransactionCount(sender);

    customerAddress.forEach(async addressInfo => {
        
        console.log("Sending ", addressInfo.amount, "tokens to", addressInfo.to)

        const transferHexData = await contract.methods
            .transfer(addressInfo.to, addressInfo.amount)
            .encodeABI();

        let rawTransaction = {
            from: sender,
            to: contractAddress,
            nonce: web3.utils.numberToHex(_nonce),
            gasPrice: web3.utils.numberToHex(gaspriceWei),
            gasLimit: web3.utils.numberToHex(50000),
            to: contractAddress,
            value: web3.utils.numberToHex(0),
            data: transferHexData
        };


        let tx = new Tx(rawTransaction);
        tx.sign(privateKey);
        let serializedTx = "0x" + tx.serialize().toString("hex");
        _nonce++;

        await web3.eth
            .sendSignedTransaction(serializedTx)
            .on("receipt", r => {
                console.log("Sent ", addressInfo.amount, "tokens to", addressInfo.to, "Teciept is\n ", r);
            })
            .on("error", r => {
                console.log("error");
                console.log(r);
            });
            

    });


})();;

