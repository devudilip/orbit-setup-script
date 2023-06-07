import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AeERC20, AeERC20Interface } from "@arbitrum/sdk/dist/lib/abi/AeERC20";
declare type AeERC20ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AeERC20__factory extends ContractFactory {
    constructor(...args: AeERC20ConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<AeERC20>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): AeERC20;
    connect(signer: Signer): AeERC20__factory;
    static readonly contractName: "AeERC20";
    readonly contractName: "AeERC20";
    static readonly bytecode = "0x608060405234801561001057600080fd5b50600054610100900460ff168061003357506100336001600160e01b036100bf16565b80610041575060005460ff16155b61007c5760405162461bcd60e51b815260040180806020018281038252602e8152602001806112e5602e913960400191505060405180910390fd5b600054610100900460ff161580156100a7576000805460ff1961ff0019909116610100171660011790555b80156100b9576000805461ff00191690555b506100e0565b60006100d4306100da60201b6109961760201c565b15905090565b3b151590565b6111f6806100ef6000396000f3fe608060405234801561001057600080fd5b50600436106100d55760003560e01c80634000aea0116100875780634000aea01461023957806370a08231146102f45780637ecebe001461031a57806395d89b4114610340578063a457c2d714610348578063a9059cbb14610374578063d505accf146103a0578063dd62ed3e146103f3576100d5565b806306fdde03146100da578063095ea7b31461015757806318160ddd1461019757806323b872dd146101b1578063313ce567146101e75780633644e51514610205578063395093511461020d575b600080fd5b6100e2610421565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561011c578181015183820152602001610104565b50505050905090810190601f1680156101495780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101836004803603604081101561016d57600080fd5b506001600160a01b0381351690602001356104b7565b604080519115158252519081900360200190f35b61019f6104d4565b60408051918252519081900360200190f35b610183600480360360608110156101c757600080fd5b506001600160a01b038135811691602081013590911690604001356104da565b6101ef610567565b6040805160ff9092168252519081900360200190f35b61019f610570565b6101836004803603604081101561022357600080fd5b506001600160a01b03813516906020013561057f565b6101836004803603606081101561024f57600080fd5b6001600160a01b038235169160208101359181019060608101604082013564010000000081111561027f57600080fd5b82018360208201111561029157600080fd5b803590602001918460018302840111640100000000831117156102b357600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506105d3945050505050565b61019f6004803603602081101561030a57600080fd5b50356001600160a01b03166106ae565b61019f6004803603602081101561033057600080fd5b50356001600160a01b03166106c9565b6100e26106f0565b6101836004803603604081101561035e57600080fd5b506001600160a01b038135169060200135610751565b6101836004803603604081101561038a57600080fd5b506001600160a01b0381351690602001356107bf565b6103f1600480360360e08110156103b657600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c001356107d3565b005b61019f6004803603604081101561040957600080fd5b506001600160a01b038135811691602001351661096b565b60368054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104ad5780601f10610482576101008083540402835291602001916104ad565b820191906000526020600020905b81548152906001019060200180831161049057829003601f168201915b5050505050905090565b60006104cb6104c461099c565b84846109a0565b50600192915050565b60355490565b60006104e7848484610a8c565b61055d846104f361099c565b6105588560405180606001604052806028815260200161112b602891396001600160a01b038a1660009081526034602052604081209061053161099c565b6001600160a01b03168152602081019190915260400160002054919063ffffffff610bf516565b6109a0565b5060019392505050565b60385460ff1690565b600061057a610c8c565b905090565b60006104cb61058c61099c565b84610558856034600061059d61099c565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff610cbf16565b60006105df84846107bf565b50836001600160a01b0316336001600160a01b03167fe19260aff97b920c7df27010903aeb9c8d2be5d310a2c67824cf3f15396e4c1685856040518083815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561065a578181015183820152602001610642565b50505050905090810190601f1680156106875780820380516001836020036101000a031916815260200191505b50935050505060405180910390a361069e84610996565b1561055d5761055d848484610d20565b6001600160a01b031660009081526033602052604090205490565b6001600160a01b03811660009081526099602052604081206106ea90610dfa565b92915050565b60378054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104ad5780601f10610482576101008083540402835291602001916104ad565b60006104cb61075e61099c565b846105588560405180606001604052806025815260200161119c602591396034600061078861099c565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff610bf516565b60006104cb6107cc61099c565b8484610a8c565b83421115610828576040805162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e65000000604482015290519081900360640190fd5b6000609a5488888861085d609960008e6001600160a01b03166001600160a01b03168152602001908152602001600020610dfa565b604080516020808201979097526001600160a01b0395861681830152939094166060840152608083019190915260a082015260c08082018990528251808303909101815260e09091019091528051910120905060006108bb82610dfe565b905060006108cb82878787610e4a565b9050896001600160a01b0316816001600160a01b031614610933576040805162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604482015290519081900360640190fd5b6001600160a01b038a16600090815260996020526040902061095490610fb5565b61095f8a8a8a6109a0565b50505050505050505050565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b3b151590565b3390565b6001600160a01b0383166109e55760405162461bcd60e51b81526004018080602001828103825260248152602001806111786024913960400191505060405180910390fd5b6001600160a01b038216610a2a5760405162461bcd60e51b815260040180806020018281038252602281526020018061104d6022913960400191505060405180910390fd5b6001600160a01b03808416600081815260346020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b038316610ad15760405162461bcd60e51b81526004018080602001828103825260258152602001806111536025913960400191505060405180910390fd5b6001600160a01b038216610b165760405162461bcd60e51b815260040180806020018281038252602381526020018061102a6023913960400191505060405180910390fd5b610b21838383610fbe565b610b648160405180606001604052806026815260200161106f602691396001600160a01b038616600090815260336020526040902054919063ffffffff610bf516565b6001600160a01b038085166000908152603360205260408082209390935590841681522054610b99908263ffffffff610cbf16565b6001600160a01b0380841660008181526033602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008184841115610c845760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610c49578181015183820152602001610c31565b50505050905090810190601f168015610c765780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600061057a60405180806110d96052913960520190506040518091039020610cb2610fc3565b610cba610fc9565b610fcf565b600082820183811015610d19576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b604051635260769b60e11b815233600482018181526024830185905260606044840190815284516064850152845187946001600160a01b0386169463a4c0ed369490938993899360840190602085019080838360005b83811015610d8e578181015183820152602001610d76565b50505050905090810190601f168015610dbb5780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b158015610ddc57600080fd5b505af1158015610df0573d6000803e3d6000fd5b5050505050505050565b5490565b6000610e08610c8c565b82604051602001808061190160f01b81525060020183815260200182815260200192505050604051602081830303815290604052805190602001209050919050565b60006fa2a8918ca85bafe22016d0b997e4df60600160ff1b03821115610ea15760405162461bcd60e51b81526004018080602001828103825260228152602001806110956022913960400191505060405180910390fd5b8360ff16601b1480610eb657508360ff16601c145b610ef15760405162461bcd60e51b81526004018080602001828103825260228152602001806110b76022913960400191505060405180910390fd5b604080516000808252602080830180855289905260ff88168385015260608301879052608083018690529251909260019260a080820193601f1981019281900390910190855afa158015610f49573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610fac576040805162461bcd60e51b815260206004820152601860248201527745434453413a20696e76616c6964207369676e617475726560401b604482015290519081900360640190fd5b95945050505050565b80546001019055565b505050565b60655490565b60665490565b6000838383610fdc611025565b6040805160208082019690965280820194909452606084019290925260808301523060a0808401919091528151808403909101815260c090920190528051910120949350505050565b469056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545434453413a20696e76616c6964207369676e6174757265202773272076616c756545434453413a20696e76616c6964207369676e6174757265202776272076616c7565454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e74726163742945524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212205bb33fd1f523733a04e23dd0b09d9e99ad798e46d0f02fcb9f70fe64f0a4825c64736f6c634300060b0033496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564";
    static readonly abi: ({
        inputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): AeERC20Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): AeERC20;
}
export {};
