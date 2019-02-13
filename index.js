const Web3 = require("web3")
const abi = require("./abi");
const Tx = require("ethereumjs-tx");
const customerAddress = require("./customerAddress")

const httpProvider = new Web3.providers.HttpProvider(
    // "https://ropsten.infura.io/m62CiajFe86L4iYN20tw"
    "http://localhost:8545"

);
const web3 = new Web3(httpProvider);


const contractAddress = "0xe6Ca4d3890F2262e4c5dCae3f7400B76131F1757";

(async () => {
    const contract = new web3.eth.Contract(abi, contractAddress);

    let pkey = "b908b68046433b7177c5b0b190ef18477f177eb3d67d36f7863346ec4007bb9d";
    let privateKey = Buffer.from(pkey, "hex");
    const sender = "0x2edcc2219cc46aaeab835f024e309ff9e9186a30";
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
            gasLimit: web3.utils.numberToHex(500000),
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

