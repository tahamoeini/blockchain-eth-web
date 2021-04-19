import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { Injectable } from '@angular/core';
import Web3 from 'web3';
import { Contract } from "web3-eth-contract";

declare var window: any;
const contractAbi = require("./contractAbi.json");

@Injectable({
  providedIn: 'root'
})
export class Web3Service {
  private web3: Web3;
  private contract: Contract;
  private contractAddress: "0x7bC56FEb81c0d23e9BDDfBfc51BfDC62A1615248";

  constructor() {
    if(window.web3){
      this.web3 = new Web3(window.ethereum);
      this.contract = new this.web3.eth.Contract(
        contractAbi,
        this.contractAddress
      );

      window.ethereum.enable().catch((err) => {
        console.log(err);
      });
    }
    else{
      console.warn('MetaMask Not Found, Install or enable it. https://metamask.io/');
    }
  }
}
