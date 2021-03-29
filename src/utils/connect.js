import nftAbi from "../abi/nft.json";
import { ethers } from "ethers";

const NFT_ADDRESS = process.env;
export let provider, signer, connected, account, contractFactory;

export async function connect() {
  if (window.ethereum) {
    provider = await new ethers.providers.Web3Provider(window.ethereum);
    signer = await provider.getSigner();
    window.ethereum.enable();
    connected = true;

    initApp();
  } else {
    alert("To use this app you'll need metamask or another web3 provider.'");
  }
}

async function initApp() {
  try {
    account = await signer.getAddress();
    contractFactory = new ethers.Contract(nftAddress, nftAbi, signer);
  } catch (e) {
    console.log(e);
  }
}
