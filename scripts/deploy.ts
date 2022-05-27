const hre = require('hardhat')
const ethers = hre.ethers

async function main() {
  const contract = await ethers.getContractFactory('Pepega')
  const pepega = await contract.deploy()

  await pepega.deployed()

  console.log(`
    Deploying
    =================
    "Pepega" contract address: ${pepega.address}
    ${await pepega.provider.getSigner().getAddress()} - deployed this contract
  `)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
