const hre = require('hardhat');
const { keccak256, toUtf8Bytes } = hre.ethers;
const addr = '0x5fbdb2315678afecb367f032d93f642f64180aa3';
async function lookup() {
    const slot = keccak256(toUtf8Bytes('jarvis'));
    const value = await hre.ethers.provider.getStorage(addr, slot);

    console.log(parseInt(value));
}
lookup();
