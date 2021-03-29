import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import MintNFT from "./components/MintNFT";
import { connect, provider, account } from "./utils/connect";

import Button from "@material-ui/core/Button";

export default function App() {
  useEffect(() => {
    // Update the document title using the browser API
    console.log("useEffect");
    connect();
  });

  // async function mintNFT(tokenURI) {
  //   const nonce = await provider.getTransactionCount(PUBLIC_KEY, 'latest'); //get latest nonce

  //   //the transaction
  //   const tx = {
  //     'from': PUBLIC_KEY,
  //     'to': contractAddress,
  //     'nonce': nonce,
  //     'gas': 500000,
  //     'data': nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI()
  //   };
  // }​

  function getAccount() {
    return account;
  }

  async function log() {
    console.log("hello world");
    console.log(getAccount());
    // console.log(account)
    // console.log(contractFactory)
    // let balance = await provider.getBalance(account)
    // console.log(balance)
    // contractFactory.mintNFT()
  }

  function login() {
    connect();
  }

  function logout() {
    provider = null;
  }

  return (
    <div className="App">
      <header className="App-header">
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <button onClick={login}>Login</button>
        <button onClick={log}>Click here</button>
        <button onClick={logout}>Logout </button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MintNFT />
      </header>
    </div>
  );
}
