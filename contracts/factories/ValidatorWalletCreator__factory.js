"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorWalletCreator__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [],
        name: "TemplateUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "walletAddress",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "executorAddress",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "ownerAddress",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "adminProxy",
                type: "address",
            },
        ],
        name: "WalletCreated",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "initialExecutorAllowedDests",
                type: "address[]",
            },
        ],
        name: "createWallet",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_template",
                type: "address",
            },
        ],
        name: "setTemplate",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "template",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b5061001a33610068565b604051610026906100b8565b604051809103906000f080158015610042573d6000803e3d6000fd5b50600180546001600160a01b0319166001600160a01b03929092169190911790556100c5565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b611b0080611e2883390190565b611d54806100d46000396000f3fe60806040523480156200001157600080fd5b50600436106200006a5760003560e01c80631cf89b4b146200006f5780636f2ddd93146200009e578063715018a614620000b257806389c716d114620000be5780638da5cb5b14620000d5578063f2fde38b14620000e7575b600080fd5b620000866200008036600462000490565b620000fe565b6040516200009591906200050a565b60405180910390f35b60015462000086906001600160a01b031681565b620000bc620002ca565b005b620000bc620000cf3660046200053b565b6200030e565b6000546001600160a01b031662000086565b620000bc620000f83660046200053b565b62000382565b604051600090339081908390620001159062000474565b604051809103906000f08015801562000132573d6000803e3d6000fd5b506001546040519192506000916001600160a01b03909116908390620001589062000482565b6001600160a01b03928316815291166020820152606060408201819052600090820152608001604051809103906000f0801580156200019b573d6000803e3d6000fd5b5060405163f2fde38b60e01b81529091506001600160a01b0383169063f2fde38b90620001cd9086906004016200050a565b600060405180830381600087803b158015620001e857600080fd5b505af1158015620001fd573d6000803e3d6000fd5b5050604051633bd1279b60e11b81526001600160a01b03841692506377a24f3691506200023590879087908c908c9060040162000560565b600060405180830381600087803b1580156200025057600080fd5b505af115801562000265573d6000803e3d6000fd5b50505050826001600160a01b0316846001600160a01b0316826001600160a01b03167f7a6fe39e62e2aeedf6430893f8ce67c6aa08c92d3c7d66c83706057ee178ee4885604051620002b891906200050a565b60405180910390a49695505050505050565b6000546001600160a01b03163314620003005760405162461bcd60e51b8152600401620002f790620005c9565b60405180910390fd5b6200030c600062000424565b565b6000546001600160a01b031633146200033b5760405162461bcd60e51b8152600401620002f790620005c9565b600180546001600160a01b0319166001600160a01b0383161790556040517f6eb26f176dd9180849dd4874d3530de0e5c1f62a6e6798d34e3abfc11f1db2cc90600090a150565b6000546001600160a01b03163314620003af5760405162461bcd60e51b8152600401620002f790620005c9565b6001600160a01b038116620004165760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401620002f7565b620004218162000424565b50565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6107be80620005ff83390190565b610f628062000dbd83390190565b60008060208385031215620004a457600080fd5b823567ffffffffffffffff80821115620004bd57600080fd5b818501915085601f830112620004d257600080fd5b813581811115620004e257600080fd5b8660208260051b8501011115620004f857600080fd5b60209290920196919550909350505050565b6001600160a01b0391909116815260200190565b80356001600160a01b03811681146200053657600080fd5b919050565b6000602082840312156200054e57600080fd5b62000559826200051e565b9392505050565b6001600160a01b0385811682528481166020808401919091526060604084018190528301849052600091859160808501845b87811015620005bb5783620005a7866200051e565b168252938201939082019060010162000592565b509998505050505050505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260408201526060019056fe608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6107408061007e6000396000f3fe60806040526004361061006b5760003560e01c8063204e1c7a14610070578063715018a6146100a65780637eff275e146100bd5780638da5cb5b146100dd5780639623609d146100f257806399a88ec414610105578063f2fde38b14610125578063f3b7dead14610145575b600080fd5b34801561007c57600080fd5b5061009061008b3660046104f6565b610165565b60405161009d919061051a565b60405180910390f35b3480156100b257600080fd5b506100bb6101f6565b005b3480156100c957600080fd5b506100bb6100d836600461052e565b61023a565b3480156100e957600080fd5b506100906102cb565b6100bb61010036600461057d565b6102da565b34801561011157600080fd5b506100bb61012036600461052e565b610370565b34801561013157600080fd5b506100bb6101403660046104f6565b6103cb565b34801561015157600080fd5b506100906101603660046104f6565b61046b565b6000806000836001600160a01b031660405161018b90635c60da1b60e01b815260040190565b600060405180830381855afa9150503d80600081146101c6576040519150601f19603f3d011682016040523d82523d6000602084013e6101cb565b606091505b5091509150816101da57600080fd5b808060200190518101906101ee9190610653565b949350505050565b336101ff6102cb565b6001600160a01b03161461022e5760405162461bcd60e51b815260040161022590610670565b60405180910390fd5b6102386000610491565b565b336102436102cb565b6001600160a01b0316146102695760405162461bcd60e51b815260040161022590610670565b6040516308f2839760e41b81526001600160a01b03831690638f2839709061029590849060040161051a565b600060405180830381600087803b1580156102af57600080fd5b505af11580156102c3573d6000803e3d6000fd5b505050505050565b6000546001600160a01b031690565b336102e36102cb565b6001600160a01b0316146103095760405162461bcd60e51b815260040161022590610670565b60405163278f794360e11b81526001600160a01b03841690634f1ef28690349061033990869086906004016106a5565b6000604051808303818588803b15801561035257600080fd5b505af1158015610366573d6000803e3d6000fd5b5050505050505050565b336103796102cb565b6001600160a01b03161461039f5760405162461bcd60e51b815260040161022590610670565b604051631b2ce7f360e11b81526001600160a01b03831690633659cfe69061029590849060040161051a565b336103d46102cb565b6001600160a01b0316146103fa5760405162461bcd60e51b815260040161022590610670565b6001600160a01b03811661045f5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610225565b61046881610491565b50565b6000806000836001600160a01b031660405161018b906303e1469160e61b815260040190565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b038116811461046857600080fd5b60006020828403121561050857600080fd5b8135610513816104e1565b9392505050565b6001600160a01b0391909116815260200190565b6000806040838503121561054157600080fd5b823561054c816104e1565b9150602083013561055c816104e1565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060006060848603121561059257600080fd5b833561059d816104e1565b925060208401356105ad816104e1565b9150604084013567ffffffffffffffff808211156105ca57600080fd5b818601915086601f8301126105de57600080fd5b8135818111156105f0576105f0610567565b604051601f8201601f19908116603f0116810190838211818310171561061857610618610567565b8160405282815289602084870101111561063157600080fd5b8260208601602083013760006020848301015280955050505050509250925092565b60006020828403121561066557600080fd5b8151610513816104e1565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60018060a01b038316815260006020604081840152835180604085015260005b818110156106e1578581018301518582016060015282016106c5565b818111156106f3576000606083870101525b50601f01601f19169290920160600194935050505056fea26469706673582212208359527d705e3a7f02ce70ba36485ac49e86845670e6ec95b6948c464899cbdd64736f6c63430008090033608060405260405162000f6238038062000f62833981016040819052620000269162000519565b82816200005560017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd620005f9565b60008051602062000f1b833981519152146200007557620000756200061f565b6200008382826000620000e7565b50620000b3905060017fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6104620005f9565b60008051602062000efb83398151915214620000d357620000d36200061f565b620000de8262000124565b50505062000688565b620000f2836200017f565b600082511180620001005750805b156200011f576200011d8383620001c160201b620002601760201c565b505b505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f6200014f620001f0565b604080516001600160a01b03928316815291841660208301520160405180910390a16200017c8162000229565b50565b6200018a81620002de565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6060620001e9838360405180606001604052806027815260200162000f3b6027913962000381565b9392505050565b60006200021a60008051602062000efb83398151915260001b6200046760201b620002081760201c565b546001600160a01b0316919050565b6001600160a01b038116620002945760405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b80620002bd60008051602062000efb83398151915260001b6200046760201b620002081760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b620002f4816200046a60201b6200028c1760201c565b620003585760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084016200028b565b80620002bd60008051602062000f1b83398151915260001b6200046760201b620002081760201c565b60606001600160a01b0384163b620003eb5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084016200028b565b600080856001600160a01b03168560405162000408919062000635565b600060405180830381855af49150503d806000811462000445576040519150601f19603f3d011682016040523d82523d6000602084013e6200044a565b606091505b5090925090506200045d82828662000479565b9695505050505050565b90565b6001600160a01b03163b151590565b606083156200048a575081620001e9565b8251156200049b5782518084602001fd5b8160405162461bcd60e51b81526004016200028b919062000653565b80516001600160a01b0381168114620004cf57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101562000507578181015183820152602001620004ed565b838111156200011d5750506000910152565b6000806000606084860312156200052f57600080fd5b6200053a84620004b7565b92506200054a60208501620004b7565b60408501519092506001600160401b03808211156200056857600080fd5b818601915086601f8301126200057d57600080fd5b815181811115620005925762000592620004d4565b604051601f8201601f19908116603f01168101908382118183101715620005bd57620005bd620004d4565b81604052828152896020848701011115620005d757600080fd5b620005ea836020830160208801620004ea565b80955050505050509250925092565b6000828210156200061a57634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052600160045260246000fd5b6000825162000649818460208701620004ea565b9190910192915050565b602081526000825180602084015262000674816040850160208701620004ea565b601f01601f19169190910160400192915050565b61086380620006986000396000f3fe60806040526004361061004e5760003560e01c80633659cfe6146100655780634f1ef286146100855780635c60da1b146100985780638f283970146100c9578063f851a440146100e95761005d565b3661005d5761005b6100fe565b005b61005b6100fe565b34801561007157600080fd5b5061005b6100803660046106ed565b610118565b61005b610093366004610708565b61015f565b3480156100a457600080fd5b506100ad6101d0565b6040516001600160a01b03909116815260200160405180910390f35b3480156100d557600080fd5b5061005b6100e43660046106ed565b61020b565b3480156100f557600080fd5b506100ad610235565b61010661029b565b61011661011161033a565b610344565b565b610120610368565b6001600160a01b0316336001600160a01b03161415610157576101548160405180602001604052806000815250600061039b565b50565b6101546100fe565b610167610368565b6001600160a01b0316336001600160a01b031614156101c8576101c38383838080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506001925061039b915050565b505050565b6101c36100fe565b60006101da610368565b6001600160a01b0316336001600160a01b03161415610200576101fb61033a565b905090565b6102086100fe565b90565b610213610368565b6001600160a01b0316336001600160a01b0316141561015757610154816103c6565b600061023f610368565b6001600160a01b0316336001600160a01b03161415610200576101fb610368565b606061028583836040518060600160405280602781526020016108076027913961041a565b9392505050565b6001600160a01b03163b151590565b6102a3610368565b6001600160a01b0316336001600160a01b031614156101165760405162461bcd60e51b815260206004820152604260248201527f5472616e73706172656e745570677261646561626c6550726f78793a2061646d60448201527f696e2063616e6e6f742066616c6c6261636b20746f2070726f78792074617267606482015261195d60f21b608482015260a4015b60405180910390fd5b60006101fb6104f5565b3660008037600080366000845af43d6000803e808015610363573d6000f35b3d6000fd5b60007fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035b546001600160a01b0316919050565b6103a48361051d565b6000825111806103b15750805b156101c3576103c08383610260565b50505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f6103ef610368565b604080516001600160a01b03928316815291841660208301520160405180910390a16101548161055d565b60606104258461028c565b6104805760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610331565b600080856001600160a01b03168560405161049b91906107b7565b600060405180830381855af49150503d80600081146104d6576040519150601f19603f3d011682016040523d82523d6000602084013e6104db565b606091505b50915091506104eb828286610606565b9695505050505050565b60007f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc61038c565b6105268161063f565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6001600160a01b0381166105c25760405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201526564647265737360d01b6064820152608401610331565b807fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035b80546001600160a01b0319166001600160a01b039290921691909117905550565b60608315610615575081610285565b8251156106255782518084602001fd5b8160405162461bcd60e51b815260040161033191906107d3565b6106488161028c565b6106aa5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401610331565b807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc6105e5565b80356001600160a01b03811681146106e857600080fd5b919050565b6000602082840312156106ff57600080fd5b610285826106d1565b60008060006040848603121561071d57600080fd5b610726846106d1565b9250602084013567ffffffffffffffff8082111561074357600080fd5b818601915086601f83011261075757600080fd5b81358181111561076657600080fd5b87602082850101111561077857600080fd5b6020830194508093505050509250925092565b60005b838110156107a657818101518382015260200161078e565b838111156103c05750506000910152565b600082516107c981846020870161078b565b9190910192915050565b60208152600082518060208401526107f281604085016020870161078b565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122038952666d1dea803a05c9cc81ac1b70fe8fed9922a9f1d9d33835c2ade09442b64736f6c63430008090033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122016193ede221cd88399ae4fd92dccd2039aa1914762661c0a51ca166f67601dcd64736f6c6343000809003360a06040523060805234801561001457600080fd5b50608051611ad0610030600039600061090a0152611ad06000f3fe6080604052600436106100d75760003560e01c80639ac2a0111161007a5780639ac2a011146101e75780639be7bbd214610217578063a158657c14610237578063af1b9a0714610257578063c179f1d914610277578063ce1d571f1461028a578063d327821a1461029d578063f2fde38b146102bd57600080fd5b8063097da1f8146100e35780630a2435f8146100f8578063193c8edd146101185780633a7c721a1461015d578063715018a61461017d57806372f458661461019257806377a24f36146101a55780638da5cb5b146101c557600080fd5b366100de57005b600080fd5b6100f66100f136600461138a565b6102dd565b005b34801561010457600080fd5b506100f661011336600461143d565b6104f2565b34801561012457600080fd5b506101486101333660046114a8565b60666020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b34801561016957600080fd5b506100f661017836600461143d565b610697565b34801561018957600080fd5b506100f6610808565b6100f66101a03660046114cc565b610843565b3480156101b157600080fd5b506100f66101c0366004611565565b61085b565b3480156101d157600080fd5b506101da610b00565b60405161015491906115bd565b3480156101f357600080fd5b506101486102023660046114a8565b60656020526000908152604090205460ff1681565b34801561022357600080fd5b506100f66102323660046114a8565b610b0f565b34801561024357600080fd5b506100f66102523660046115d1565b610b8b565b34801561026357600080fd5b506100f6610272366004611601565b610c35565b6100f6610285366004611655565b610c42565b6100f6610298366004611701565b610f85565b3480156102a957600080fd5b506100f66102b8366004611565565b610f99565b3480156102c957600080fd5b506100f66102d83660046114a8565b6111e8565b3360009081526065602052604090205460ff1615801561030d575033610301610b00565b6001600160a01b031614155b1561033757335b60405163f26aea8b60e01b815260040161032e91906115bd565b60405180910390fd5b8460005a9050841561036a576001600160a01b0384163b61036a5760405162461bcd60e51b815260040161032e9061175d565b61037384610b0f565b6000846001600160a01b0316848888604051610390929190611786565b60006040518083038185875af1925050503d80600081146103cd576040519150601f19603f3d011682016040523d82523d6000602084013e6103d2565b606091505b50509050806103e8576040513d806000833e8082fd5b506001600160a01b038216156104e957366000602061040883601f6117ac565b61041291906117c4565b90506102006104226002836118cc565b61042c91906117c4565b6104378260066118db565b61044191906117ac565b61044b90846117ac565b925033321461045957600091505b836001600160a01b031663e3db8a49335a61047490876118fa565b856040518463ffffffff1660e01b815260040161049393929190611911565b602060405180830381600087803b1580156104ad57600080fd5b505af11580156104c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104e59190611940565b5050505b50505050505050565b336104fb610b00565b6001600160a01b0316146105215760405162461bcd60e51b815260040161032e9061195d565b82811461054b5760405163088253c360e11b8152600481018490526024810182905260440161032e565b60005b6001600160401b038116841115610690578282826001600160401b031681811061057a5761057a611992565b905060200201602081019061058f91906119a8565b606560008787856001600160401b03168181106105ae576105ae611992565b90506020020160208101906105c391906114a8565b6001600160a01b031681526020810191909152604001600020805460ff191691151591909117905584846001600160401b03831681811061060657610606611992565b905060200201602081019061061b91906114a8565b6001600160a01b03167f9fdbc2d48b8a0db2f62663bf9312ad02f5b1f6414ad600b55a247d09aeec3ea28484846001600160401b031681811061066057610660611992565b905060200201602081019061067591906119a8565b604051901515815260200160405180910390a260010161054e565b5050505050565b336106a0610b00565b6001600160a01b0316146106c65760405162461bcd60e51b815260040161032e9061195d565b8281146106f05760405163088253c360e11b8152600481018490526024810182905260440161032e565b60005b838110156106905782828281811061070d5761070d611992565b905060200201602081019061072291906119a8565b6066600087878581811061073857610738611992565b905060200201602081019061074d91906114a8565b6001600160a01b031681526020810191909152604001600020805460ff191691151591909117905584848281811061078757610787611992565b905060200201602081019061079c91906114a8565b6001600160a01b03167fab063fe575c4df359aaf3733bcf10706bacfdd24557e670a2c1cba126ae4d8a48484848181106107d8576107d8611992565b90506020020160208101906107ed91906119a8565b604051901515815260200160405180910390a26001016106f3565b33610811610b00565b6001600160a01b0316146108375760405162461bcd60e51b815260040161032e9061195d565b6108416000611281565b565b6108536000878787878787610c42565b505050505050565b600054610100900460ff166108765760005460ff161561087a565b303b155b6108dd5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161032e565b600054610100900460ff161580156108ff576000805461ffff19166101011790555b306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016141561098d5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b606482015260840161032e565b6109956112d3565b61099e846111e8565b6001600160a01b038516600081815260656020908152604091829020805460ff1916600190811790915591519182527f9fdbc2d48b8a0db2f62663bf9312ad02f5b1f6414ad600b55a247d09aeec3ea2910160405180910390a260005b6001600160401b038116831115610ae7576001606660008686856001600160401b0316818110610a2d57610a2d611992565b9050602002016020810190610a4291906114a8565b6001600160a01b031681526020810191909152604001600020805460ff191691151591909117905583836001600160401b038316818110610a8557610a85611992565b9050602002016020810190610a9a91906114a8565b6001600160a01b03167fab063fe575c4df359aaf3733bcf10706bacfdd24557e670a2c1cba126ae4d8a46001604051610ad7911515815260200190565b60405180910390a26001016109fb565b508015610690576000805461ff00191690555050505050565b6033546001600160a01b031690565b6001600160a01b03811660009081526066602052604090205460ff16158015610b48575033610b3c610b00565b6001600160a01b031614155b15610b8857610b55610b00565b6040516320fe37c560e11b81526001600160a01b039182166004820152336024820152908216604482015260640161032e565b50565b33610b94610b00565b6001600160a01b031614610bba5760405162461bcd60e51b815260040161032e9061195d565b6000816001600160a01b03168360405160006040518083038185875af1925050503d8060008114610c07576040519150601f19603f3d011682016040523d82523d6000602084013e610c0c565b606091505b5050905080610c305781604051630fdb769360e31b815260040161032e91906115bd565b505050565b610c306000848484610f99565b3360009081526065602052604090205460ff16158015610c72575033610c66610b00565b6001600160a01b031614155b15610c7d5733610314565b8660005a905086858114610cae5760405163088253c360e11b8152600481018290526024810187905260440161032e565b808414610cd85760405163088253c360e11b8152600481018290526024810185905260440161032e565b60005b81811015610e785760008a8a83818110610cf757610cf7611992565b9050602002810190610d0991906119c5565b90501115610d6657610d4a888883818110610d2657610d26611992565b9050602002016020810190610d3b91906114a8565b6001600160a01b03163b151590565b610d665760405162461bcd60e51b815260040161032e9061175d565b610d90888883818110610d7b57610d7b611992565b905060200201602081019061023291906114a8565b6000888883818110610da457610da4611992565b9050602002016020810190610db991906114a8565b6001600160a01b0316878784818110610dd457610dd4611992565b905060200201358c8c85818110610ded57610ded611992565b9050602002810190610dff91906119c5565b604051610e0d929190611786565b60006040518083038185875af1925050503d8060008114610e4a576040519150601f19603f3d011682016040523d82523d6000602084013e610e4f565b606091505b5050905080610e65576040513d806000833e8082fd5b5080610e7081611a0b565b915050610cdb565b50506001600160a01b03821615610f7a573660006020610e9983601f6117ac565b610ea391906117c4565b9050610200610eb36002836118cc565b610ebd91906117c4565b610ec88260066118db565b610ed291906117ac565b610edc90846117ac565b9250333214610eea57600091505b836001600160a01b031663e3db8a49335a610f0590876118fa565b856040518463ffffffff1660e01b8152600401610f2493929190611911565b602060405180830381600087803b158015610f3e57600080fd5b505af1158015610f52573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f769190611940565b5050505b505050505050505050565b610f936000858585856102dd565b50505050565b3360009081526065602052604090205460ff16158015610fc9575033610fbd610b00565b6001600160a01b031614155b15610fd45733610314565b8360005a90508260005b818110156110ea57866001600160a01b0316631b45c86a87878481811061100757611007611992565b905060200201602081019061101c9190611a26565b6040516001600160e01b031960e084901b1681526001600160401b039091166004820152602401600060405180830381600087803b15801561105d57600080fd5b505af192505050801561106e575060015b6110d8573d80801561109c576040519150601f19603f3d011682016040523d82523d6000602084013e6110a1565b606091505b5080516110d65760405162461bcd60e51b815260206004820152600360248201526247415360e81b604482015260640161032e565b505b806110e281611a0b565b915050610fde565b50506001600160a01b0382161561085357366000602061110b83601f6117ac565b61111591906117c4565b90506102006111256002836118cc565b61112f91906117c4565b61113a8260066118db565b61114491906117ac565b61114e90846117ac565b925033321461115c57600091505b836001600160a01b031663e3db8a49335a61117790876118fa565b856040518463ffffffff1660e01b815260040161119693929190611911565b602060405180830381600087803b1580156111b057600080fd5b505af11580156111c4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f7a9190611940565b336111f1610b00565b6001600160a01b0316146112175760405162461bcd60e51b815260040161032e9061195d565b6001600160a01b03811661127c5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161032e565b610b88815b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff166112fa5760405162461bcd60e51b815260040161032e90611a4f565b610841600054610100900460ff166113245760405162461bcd60e51b815260040161032e90611a4f565b61084133611281565b6001600160a01b0381168114610b8857600080fd5b60008083601f84011261135457600080fd5b5081356001600160401b0381111561136b57600080fd5b60208301915083602082850101111561138357600080fd5b9250929050565b6000806000806000608086880312156113a257600080fd5b85356113ad8161132d565b945060208601356001600160401b038111156113c857600080fd5b6113d488828901611342565b90955093505060408601356113e88161132d565b949793965091946060013592915050565b60008083601f84011261140b57600080fd5b5081356001600160401b0381111561142257600080fd5b6020830191508360208260051b850101111561138357600080fd5b6000806000806040858703121561145357600080fd5b84356001600160401b038082111561146a57600080fd5b611476888389016113f9565b9096509450602087013591508082111561148f57600080fd5b5061149c878288016113f9565b95989497509550505050565b6000602082840312156114ba57600080fd5b81356114c58161132d565b9392505050565b600080600080600080606087890312156114e557600080fd5b86356001600160401b03808211156114fc57600080fd5b6115088a838b016113f9565b9098509650602089013591508082111561152157600080fd5b61152d8a838b016113f9565b9096509450604089013591508082111561154657600080fd5b5061155389828a016113f9565b979a9699509497509295939492505050565b6000806000806060858703121561157b57600080fd5b84356115868161132d565b935060208501356115968161132d565b925060408501356001600160401b038111156115b157600080fd5b61149c878288016113f9565b6001600160a01b0391909116815260200190565b600080604083850312156115e457600080fd5b8235915060208301356115f68161132d565b809150509250929050565b60008060006040848603121561161657600080fd5b83356116218161132d565b925060208401356001600160401b0381111561163c57600080fd5b611648868287016113f9565b9497909650939450505050565b60008060008060008060006080888a03121561167057600080fd5b873561167b8161132d565b965060208801356001600160401b038082111561169757600080fd5b6116a38b838c016113f9565b909850965060408a01359150808211156116bc57600080fd5b6116c88b838c016113f9565b909650945060608a01359150808211156116e157600080fd5b506116ee8a828b016113f9565b989b979a50959850939692959293505050565b6000806000806060858703121561171757600080fd5b84356001600160401b0381111561172d57600080fd5b61173987828801611342565b909550935050602085013561174d8161132d565b9396929550929360400135925050565b6020808252600f908201526e2727afa1a7a222afa0aa2fa0a2222960891b604082015260600190565b8183823760009101908152919050565b634e487b7160e01b600052601160045260246000fd5b600082198211156117bf576117bf611796565b500190565b6000826117e157634e487b7160e01b600052601260045260246000fd5b500490565b600181815b8085111561182157816000190482111561180757611807611796565b8085161561181457918102915b93841c93908002906117eb565b509250929050565b600082611838575060016118c6565b81611845575060006118c6565b816001811461185b576002811461186557611881565b60019150506118c6565b60ff84111561187657611876611796565b50506001821b6118c6565b5060208310610133831016604e8410600b84101617156118a4575081810a6118c6565b6118ae83836117e6565b80600019048211156118c2576118c2611796565b0290505b92915050565b60006114c560ff841683611829565b60008160001904831182151516156118f5576118f5611796565b500290565b60008282101561190c5761190c611796565b500390565b6001600160a01b039390931683526020830191909152604082015260600190565b8015158114610b8857600080fd5b60006020828403121561195257600080fd5b81516114c581611932565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b634e487b7160e01b600052603260045260246000fd5b6000602082840312156119ba57600080fd5b81356114c581611932565b6000808335601e198436030181126119dc57600080fd5b8301803591506001600160401b038211156119f657600080fd5b60200191503681900382131561138357600080fd5b6000600019821415611a1f57611a1f611796565b5060010190565b600060208284031215611a3857600080fd5b81356001600160401b03811681146114c557600080fd5b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b60608201526080019056fea26469706673582212202c552ae88ebe0149b0c3997cfd4fc2cd7660183495c543f2f4a6963d29f36b2a64736f6c63430008090033";
const isSuperArgs = (xs) => xs.length > 1;
class ValidatorWalletCreator__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
        this.contractName = "ValidatorWalletCreator";
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ValidatorWalletCreator__factory = ValidatorWalletCreator__factory;
ValidatorWalletCreator__factory.bytecode = _bytecode;
ValidatorWalletCreator__factory.abi = _abi;
