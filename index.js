const Web3 = require("web3")
const abi = require("./abi");
const Tx = require("ethereumjs-tx");
const customerAddress = require("./customerAddress")

const httpProvider = new Web3.providers.HttpProvider(
    "https://ropsten.infura.io/m62CiajFe86L4iYN20tw"
);
const web3 = new Web3(httpProvider);


const contractAddress = "0x169498a44e45880195886ed9cb608dd0dbff203c";

(async () => {
    const contract = new web3.eth.Contract(abi, contractAddress);

    let pkey = ".......PUT your Private key here";
    let privateKey = Buffer.from(pkey, "hex");
    const sender = "0x6Aff5C1e2b42C621E73B9b62965C45268F72Da51";
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

