---
title: Publish to LAND with Wallet Connect
publish_date: 2019-11-08
---

As of today Decentraland developers are at the forefront of the Web3 world. We’ve created the first terminal-only Dapp by using WalletConnect, allowing you to deploy scenes using next-generation web3 wallets.

What is WalletConnect?#
WalletConnect(https://walletconnect.org) is an open protocol for connecting desktop Dapps to mobile Wallets using end-to-end encryption by scanning a QR code. A lot of web Dapps in the blockchain ecosystem are now supporting WalletConnect as an alternative to MetaMask for users that are already using supported mobile wallets instead of a browser extension.

The team at Decentraland have tooled the CLI to support WalletConnect, bringing a fully terminal-only experience. Before it was necessary to use either the environment private key option or the Linker Dapp, which is the page that opens when you run the command dcl deploy. The Linker Dapp was developed as a patch solution so users can still sign the deploy transaction with their browser wallets.

How do I use WalletConnect to deploy a scene?#
Make sure you already have the latest dcl version (3.3.0) and just run

dcl deploy --wallet-connect

With this you enable the WalletConnect deploy option, which displays a terminal-friendly QR code that you can scan with your mobile wallet that owns or operates the target LAND.



How did you develop this?#
Good question! If you’re interested in how we technically achieved the first terminal-only integration you can see the pull request but in essence, we developed a new WalletConnect client that we may open source later (as soon as it is well documented and stable) focused on terminals, only browser and react-native packages were developed until now.

What’s next?#
Right now we are using WalletConnect as a second option (that’s why we’re using a flag instead of making it the default option) because we consider this an experimental feature. Even though a lot of Dapps are already using WC, Browser Extension Dapps are still the majority. We’re going to wait until we are sure which is going to be the best approach for the future. Remember that the Web3/blockchain industry is very young still!

If you have any questions or problems, feel free to reach out to me (@fmiras) on Decentraland’s Discord in any of the SDK or developer channels!

