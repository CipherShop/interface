import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Web3 from "web3";
import { BigNumber } from 'bignumber.js';
import Fortmatic from 'fortmatic';

@Injectable({
  providedIn: 'root'
})
export class Web3Service {

  fm = new Fortmatic('pk_live_8001ED6E0291608E');

  web3: any;
  accounts: Array<string> = [];
  
  waitingWeb3Metamask: boolean = false;

  constructor(
    private http: HttpClient,
  ) {
  }

  isMetamaskWaiting(): boolean {
    return this.waitingWeb3Metamask;
  }

  async isMetamaskConnected(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if ((<any>window).ethereum) {
        this.waitingWeb3Metamask = true;
        (<any>window).ethereum.request({ method: 'eth_accounts' }).then((accounts: any) => {
          if (accounts.length > 0) {
            this.accounts = accounts;
            this.waitingWeb3Metamask = false;
            resolve(true);
          } else {
            this.waitingWeb3Metamask = false;
            resolve(false);
          }
        }).catch((err: any) => {
          console.error(err);
          this.waitingWeb3Metamask = false;
          reject();
        });
      } else {
        this.waitingWeb3Metamask = false;
        reject();
      }
    });
  }

  async loadWeb3Metamask(): Promise<void> {
    if (!this.waitingWeb3Metamask) {
      if ((<any>window).ethereum) {
        this.web3 = new Web3((<any>window).ethereum);
          this.waitingWeb3Metamask = true;
          try{
            this.accounts = await (<any>window).ethereum.request({ method: 'eth_requestAccounts' });
            this.waitingWeb3Metamask = false;
          }
          catch (err: any) {
            console.error(err);
            this.accounts = [];
            throw new Error(err);
          }
        } else {
          window.alert('Non-Ethereum browser detected. You Should consider using MetaMask!');
        }
      } else {
    }
  }

  async loadWeb3Fortmatic(): Promise<void> {
    this.web3 = new Web3(this.fm.getProvider() as any);
    try {
      this.web3.eth.getAccounts().then((accounts: any) => {
        this.accounts = accounts;
      });
    } catch(e) {
      console.error(e)
    }
  }

  changeMetamaskNetwork(): Promise<boolean> {
    return new Promise( async (resolve, reject) => {
      try {
        await (<any>window).ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x1'}],
        });
        resolve(true);
      } catch(err) {
        console.error(err);
        reject();
      }
    })
  }
  
  async getERC20Symbol(address: string): Promise<string> {
    return new Promise( async (resolve, reject) => {

      if (!this.web3) {
        if ((<any>window).ethereum) {
          this.web3 = new Web3((<any>window).ethereum);
          if ((<any>window).ethereum.networkVersion !== 1) {
            await this.changeMetamaskNetwork();
          }
          if (!address) {
            if (this.accounts.length === 0) {
              this.accounts = await (<any>window).ethereum.request({ method: 'eth_requestAccounts' });
            }
          }
        } else if ((<any>window).web3) {
          this.web3 = new Web3((<any>window).web3.currentProvider);
        } else {
          this.web3 = new Web3(this.fm.getProvider() as any);
        }
      } else {
        if ((<any>window).ethereum) {
          if ((<any>window).ethereum.networkVersion !== 1) {
            await this.changeMetamaskNetwork();
          }
          if (!address) {
            this.accounts = await (<any>window).ethereum.request({ method: 'eth_requestAccounts' });
          }
        } else {
          if (!address) {
            if (this.accounts.length === 0) {
              this.accounts = await this.web3.eth.getAccounts();
            }
          }
        }
      }

      let tokenAddress = address;
      
      let contractABI = [{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"address","name":"_minter","type":"address"},{"internalType":"uint256","name":"_mintingAllowedAfter","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"minter","type":"address"},{"indexed":false,"internalType":"address","name":"newMinter","type":"address"}],"name":"MinterChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"minimumTimeBetweenMints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintCap","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintingAllowedAfter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"addresses","type":"address[]"},{"internalType":"uint256[]","name":"quantities","type":"uint256[]"}],"name":"multiTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];

      // Get ERC20 Token contract instance
      let contract = new this.web3.eth.Contract(contractABI, tokenAddress);
      
      // Call symbol function
      let symbol = await contract.methods.symbol().call();
 
      resolve(symbol);

    });
  }

}
