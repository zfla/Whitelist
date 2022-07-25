const { ethers } = require("hardhat");

async function main() {
  const WhitelistContract = await ethers.getContractFactory("Whitelist");

  const deployedContract = await WhitelistContract.deploy(10);

  await deployedContract.deployed()

  console.log("Whitelist Contract Address", deployedContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
