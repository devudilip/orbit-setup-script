# Blockserve setup script


## Instructions

1. Clone the https://github.com/blockservelabs/orbit-setup-script.git repository, and run `yarn install`. Then, move the both the `nodeConfig.json` and `orbitSetupScriptConfig.json` files into the `config` directory within the cloned repository
2. Launch Docker, and in the base directory, run `docker-compose up -d`. This will launch the node with a Public RPC reachable at http://localhost:8449/  and a corresponding BlockScout explorer instance, viewable at http://localhost:4000/
3. Then, add the private key for the wallet you used to deploy the rollup contracts earlier in the following command, and run it: `PRIVATE_KEY="0xYourPrivateKey" L2_RPC_URL="https://goerli-rollup.arbitrum.io/rpc" L3_RPC_URL="http://localhost:8449" yarn run setup`
4. The Orbit chain is now setup. You can find all information about the newly deployed chain in the `outputInfo.json` file which is created on the main directory of script folder.
5. Optionally, to track logs, run the following command within the base directory: `docker-compose logs -f nitro`


## Expectations
After generating nodeConfig.json and orbitSetupScriptConfig.json, follow above steps to spin up 3 applications. 
1. node server (actual rollup RPC) - to be exposed 
2. Blockscout (Block explorer url) - to be exposed
3. postgres (to index data)


Finally we should return the above url to save against users.
