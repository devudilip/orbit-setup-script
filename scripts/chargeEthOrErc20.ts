import { ethers } from 'ethers'

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function main() {
  // Instead of Private key should use metamask connection.
  // Make sure wallet is connected to L2_RPC_URL as source chain
  // L3_RPC_URL is destination chain
  // L2_RPC_URL,L3_RPC_URL, AMOUNT,inbox will come from Backend
  const privateKey = process.env.PRIVATE_KEY
  const L2_RPC_URL = process.env.L2_RPC_URL
  const L3_RPC_URL = process.env.L3_RPC_URL
  const amount = process.env.AMOUNT
  const inboxAddress = process.env.inbox

  if (!privateKey || !L2_RPC_URL || !L3_RPC_URL || !amount || !inboxAddress) {
    throw new Error('Required environment variable not found')
  }

  const l2Provider = new ethers.providers.JsonRpcProvider(L2_RPC_URL)
  const l3Provider = new ethers.providers.JsonRpcProvider(L3_RPC_URL)
  const l2Signer = new ethers.Wallet(privateKey).connect(l2Provider)
  const oldBalance = await l3Provider.getBalance(l2Signer.address)
  const depositEthInterface = new ethers.utils.Interface([
    'function depositEth() public payable',
  ])
  const contract = new ethers.Contract(
    inboxAddress,
    depositEthInterface,
    l2Signer
  )
  const tx = await contract.depositEth({
    value: ethers.utils.parseEther(amount),
  })
  console.log('Transaction hash on parent chain: ', tx.hash)
  await tx.wait()
  console.log('Transaction has been mined')
  console.log(`${amount} ETHs are deposited to your account`)

  while (true) {
    const newBalance = await l3Provider.getBalance(l2Signer.address)
    if (newBalance.gt(oldBalance)) {
      console.log(
        `LFG! 🚀 Balance of your account on Orbit chain increased by ${amount} Ether.`
      )
      break
    }
    console.log(
      'Balance not changed yet. Waiting for another 30 seconds to receive the funds on the Orbit chain ⏰⏰⏰⏰⏰⏰'
    )
    await delay(30 * 1000)
  }
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
