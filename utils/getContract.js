import ContractAbi from "../artifacts/contracts/Youtube.sol/YouTube.json";
import { ethers } from "ethers";

export default function getContract() {
  // Creating a new provider
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  // Getting the signer
  const signer = provider.getSigner();
  console.log(signer);
  // Creating a new contract factory with the signer, address and ABI
  let contract = new ethers.Contract(
    "0x80063BfBbB9AeCC839Ec437F68a00813eF56EA1C",
    ContractAbi.abi,
    signer
  );
  console.log(contract);
  // Returning the contract
  return contract;
}
