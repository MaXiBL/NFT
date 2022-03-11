import Web3 from 'web3'
import { AbiItem } from 'web3-utils'
import { webConnect } from "./connectWallet";

// ABI
const IVP1155 = require('../config/IVP1155.json')
const IVPSales1155 = require('../config/IVPSales1155.json')

const IVP721 = require('../config/IVP721.json')
const IVPSales721 = require('../config/IVPSales721.json')

const IVPSales = require('../config/IVPSales.json')

const getContract = (abi: any, address: string, web3?: Web3) => {
  const _web3 = web3 ?? webConnect
  return new _web3.eth.Contract((abi as unknown) as AbiItem, address)
}

// nft
export const getNftContract = async (address: any, type: string, web3?: Web3) => {
  if (type == "ERC1155") {
    return getContract(IVP1155.abi, address, web3)
  }
  if (type == "ERC721") {
    return getContract(IVP721.abi, address, web3)
  } else if (type == "PROXY") {
    const { ethers } = require("ethers")
    let provider = await new ethers.providers.Web3Provider((window as any).ethereum)
    let signer = await provider.getSigner()
    const IVPABI = require("../config/IVP721.json")
    const PROXY = require("../config/Proxy2.json")

    let ERC721 = new ethers.ContractFactory(IVPABI.abi, IVPABI.bytecode, signer)
    let Proxy = new ethers.ContractFactory(PROXY.abi, PROXY.bytecode, signer)

     // 以下地址从 /media/config.json 接口获取
    // let owner = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
    // let impl_address = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

    let collectionName = "good arts"
    let collectionSymbol = "GARTS"
    let p1 = ERC721.interface.encodeFunctionData("initialize(string,string,string,address)", [address.name, address.name, "", address.owner])
    let proxy_token = await Proxy.deploy(address.owner, address.impl, p1)
    return proxy_token.address
  }
  throw ("unknow contract type " + type)
}

// trade 合约
export const getTradeContract = (address: string, type: string, web3?: Web3) => {
  return getContract(IVPSales.abi, address, web3)
//   if (type == "ERC1155") {
//     return getContract(IVPSales1155.abi, address, web3)
//   }
//   if (type == "ERC721") {
//     return getContract(IVPSales721.abi, address, web3)
//   }
//   throw ("unknow contract type " + type)
}

