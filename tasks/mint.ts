import '@nomiclabs/hardhat-ethers'
import { task } from 'hardhat/config'

import { nftAddress } from '../config'

task('mint', 'mint your ERC-721 token')
  .addParam('to', 'The address that will receive the token')
  .addParam('id', 'Select token id')
  .addParam('uri', 'Token URI')
  .setAction(async function (taskArgs, hre) {
    const token = await hre.ethers.getContractAt('Pepega', nftAddress)
    const signers = await ethers.getSigners()

    console.log(signers)
    await token.safeMint(taskArgs.to, taskArgs.id, taskArgs.uri)
  })
