module.exports = [
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
		  {
			"name": "",
			"type": "string"
		  }
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0x06fdde03"
	  },
	  {
		"constant": false,
		"inputs": [
		  {
			"name": "spender",
			"type": "address"
		  },
		  {
			"name": "value",
			"type": "uint256"
		  }
		],
		"name": "approve",
		"outputs": [
		  {
			"name": "",
			"type": "bool"
		  }
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function",
		"signature": "0x095ea7b3"
	  },
	  {
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
		  {
			"name": "",
			"type": "uint256"
		  }
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0x18160ddd"
	  },
	  {
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [
		  {
			"name": "",
			"type": "uint8"
		  }
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0x313ce567"
	  },
	  {
		"constant": false,
		"inputs": [
		  {
			"name": "spender",
			"type": "address"
		  },
		  {
			"name": "addedValue",
			"type": "uint256"
		  }
		],
		"name": "increaseAllowance",
		"outputs": [
		  {
			"name": "",
			"type": "bool"
		  }
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function",
		"signature": "0x39509351"
	  },
	  {
		"constant": true,
		"inputs": [
		  {
			"name": "owner",
			"type": "address"
		  }
		],
		"name": "balanceOf",
		"outputs": [
		  {
			"name": "",
			"type": "uint256"
		  }
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0x70a08231"
	  },
	  {
		"constant": false,
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function",
		"signature": "0x715018a6"
	  },
	  {
		"constant": true,
		"inputs": [
		  {
			"name": "",
			"type": "address"
		  }
		],
		"name": "transferAgents",
		"outputs": [
		  {
			"name": "",
			"type": "bool"
		  }
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0x867c2857"
	  },
	  {
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
		  {
			"name": "",
			"type": "address"
		  }
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0x8da5cb5b"
	  },
	  {
		"constant": true,
		"inputs": [],
		"name": "isOwner",
		"outputs": [
		  {
			"name": "",
			"type": "bool"
		  }
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0x8f32d59b"
	  },
	  {
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
		  {
			"name": "",
			"type": "string"
		  }
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0x95d89b41"
	  },
	  {
		"constant": true,
		"inputs": [],
		"name": "released",
		"outputs": [
		  {
			"name": "",
			"type": "bool"
		  }
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0x96132521"
	  },
	  {
		"constant": false,
		"inputs": [
		  {
			"name": "spender",
			"type": "address"
		  },
		  {
			"name": "subtractedValue",
			"type": "uint256"
		  }
		],
		"name": "decreaseAllowance",
		"outputs": [
		  {
			"name": "",
			"type": "bool"
		  }
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function",
		"signature": "0xa457c2d7"
	  },
	  {
		"constant": true,
		"inputs": [],
		"name": "releaseAgent",
		"outputs": [
		  {
			"name": "",
			"type": "address"
		  }
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0xd1f276d3"
	  },
	  {
		"constant": true,
		"inputs": [
		  {
			"name": "owner",
			"type": "address"
		  },
		  {
			"name": "spender",
			"type": "address"
		  }
		],
		"name": "allowance",
		"outputs": [
		  {
			"name": "",
			"type": "uint256"
		  }
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0xdd62ed3e"
	  },
	  {
		"constant": false,
		"inputs": [
		  {
			"name": "newOwner",
			"type": "address"
		  }
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function",
		"signature": "0xf2fde38b"
	  },
	  {
		"inputs": [
		  {
			"name": "name",
			"type": "string"
		  },
		  {
			"name": "symbol",
			"type": "string"
		  },
		  {
			"name": "decimals",
			"type": "uint8"
		  },
		  {
			"name": "amount",
			"type": "uint256"
		  }
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor",
		"signature": "constructor"
	  },
	  {
		"anonymous": false,
		"inputs": [
		  {
			"indexed": true,
			"name": "from",
			"type": "address"
		  },
		  {
			"indexed": true,
			"name": "to",
			"type": "address"
		  },
		  {
			"indexed": false,
			"name": "value",
			"type": "uint256"
		  }
		],
		"name": "Transfer",
		"type": "event",
		"signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
	  },
	  {
		"anonymous": false,
		"inputs": [
		  {
			"indexed": true,
			"name": "owner",
			"type": "address"
		  },
		  {
			"indexed": true,
			"name": "spender",
			"type": "address"
		  },
		  {
			"indexed": false,
			"name": "value",
			"type": "uint256"
		  }
		],
		"name": "Approval",
		"type": "event",
		"signature": "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"
	  },
	  {
		"anonymous": false,
		"inputs": [
		  {
			"indexed": true,
			"name": "previousOwner",
			"type": "address"
		  },
		  {
			"indexed": true,
			"name": "newOwner",
			"type": "address"
		  }
		],
		"name": "OwnershipTransferred",
		"type": "event",
		"signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
	  },
	  {
		"constant": false,
		"inputs": [
		  {
			"name": "addr",
			"type": "address"
		  }
		],
		"name": "setReleaseAgent",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function",
		"signature": "0x29ff4f53"
	  },
	  {
		"constant": false,
		"inputs": [],
		"name": "release",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function",
		"signature": "0x86d1a69f"
	  },
	  {
		"constant": false,
		"inputs": [
		  {
			"name": "addr",
			"type": "address"
		  },
		  {
			"name": "state",
			"type": "bool"
		  }
		],
		"name": "setTransferAgent",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function",
		"signature": "0x02f652a3"
	  },
	  {
		"constant": false,
		"inputs": [
		  {
			"name": "_to",
			"type": "address"
		  },
		  {
			"name": "_value",
			"type": "uint256"
		  }
		],
		"name": "transfer",
		"outputs": [
		  {
			"name": "success",
			"type": "bool"
		  }
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function",
		"signature": "0xa9059cbb"
	  },
	  {
		"constant": false,
		"inputs": [
		  {
			"name": "_from",
			"type": "address"
		  },
		  {
			"name": "_to",
			"type": "address"
		  },
		  {
			"name": "_value",
			"type": "uint256"
		  }
		],
		"name": "transferFrom",
		"outputs": [
		  {
			"name": "success",
			"type": "bool"
		  }
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function",
		"signature": "0x23b872dd"
	  },
	  {
		"constant": false,
		"inputs": [
		  {
			"name": "_value",
			"type": "uint256"
		  }
		],
		"name": "burn",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function",
		"signature": "0x42966c68"
	  },
	  {
		"constant": false,
		"inputs": [
		  {
			"name": "_from",
			"type": "address"
		  },
		  {
			"name": "_value",
			"type": "uint256"
		  }
		],
		"name": "burnFrom",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function",
		"signature": "0x79cc6790"
	  }
	]