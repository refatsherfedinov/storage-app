const hre = require('hardhat');
const { keccak256, toUtf8Bytes } = hre.ethers;
const addr = '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512';
async function lookup() {
    const storage = await hre.ethers.getContractAt('Storage', addr);

    await storage.check();
}
lookup();
