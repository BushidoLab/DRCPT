const assert = require("assert");
const Web3 = require("web3");
const ganache = require("ganache-cli");
const abi = require("../abi");
const bytecode = require("../bytecode");
const customerAddresses = require("../customerAddress");

const web3 = new Web3(ganache.provider());

let contractAddress;
let accounts;
let contract;

before(async function() {
  accounts = await web3.eth.getAccounts();
  console.log("Current address: ", accounts[0]);

  try {
    contract = await new web3.eth.Contract(abi)
      .deploy({
        data: `0x${bytecode}`,
        arguments: ["DRCPT", "DRCPT", "18", "10000"]
      })
      .send({
        from: accounts[0],
        gas: "1700000"
      });
    console.log(contract);
  } catch (err) {
    console.log(err);
  }

  //   contractAddress = contract.options.address;

  console.log(`Contract deployed at ${contractAddress} by ${accounts[0]}`);
});

describe("Airdrop", function() {
  it("Should register transferAgent", async () => {
    let sender = accounts[0];
    let transferAgent = accounts[0];
    const setTransferAgent = await contract.methods
      .setTransferAgent(transferAgent, true)
      .send({
        from: sender
      });
    const checkTransferAgent = await contract.methods
      .transferAgents(transferAgent)
      .call({
        from: sender
      });
    assert.equal(checkTransferAgent, true);
  });
  it("It should airdrop to the addresses in customerAddress", async () => {
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
  });
  it("sends the correct amount to the addresses", async () => {
    for (let i = 0; i < customerAddresses.length; i++) {
      const addressInfo = customerAddresses[i];
      console.log("Sending ", addressInfo.amount, "tokens to", addressInfo.to);

      const tx = await contract.methods.balanceOf(addressInfo.to).call({
        from: accounts[0],
        gas: "85000"
      });

      assert.equal(tx, addressInfo.amount);
    }
  });
});
