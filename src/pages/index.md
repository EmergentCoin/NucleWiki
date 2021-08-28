---
title: Nucle Wallet
---

# Nucle

Nucle wallet is the first SPV wallet for [Chia blockchain](https://chia.net). Your first step to the Chia DeFi world! 

## Frequently Asked Questions  

### What is a SPV wallet ?  
SPV stands for *Simplified Payment Verification* which allows you use Chia without running a full node. Since Chia is using the model that similar to Bitcoin's UTXO, further explanation can be found at [here](https://en.bitcoinwiki.org/wiki/Simplified_Payment_Verification).

### Why should I use Nucle instead of Chia full node wallet ?
Nucle is not a replacement for Chia full node wallet. There are certain limitations for both SPV wallet and full node wallet.
* Nucle is a great hot wallet for day to day use while full node wallets are good for cold storage.
* Full node wallets require a longer time to sync and disk space for the blockchain before a user is able to make transactions or browser latest history. This is because a full node wallet will verify every block and every transaction that is inside the block, giving it the the highest accuracy and security. In comparison, the SPV wallet does not verify every transaction nor inspect the whole block.
* Besides being use as a regular use hot wallet, Nucle is focused on being ready for the Chia Decentralized Finance (DeFi) ecosystem. Nucle is very lightweight and is able to run on many platforms and systems, such browser extensions, mobile phones, and webpages.

### Is Nucle safe ?
Nucle is a decentralized wallet just like the Chia full node wallet. Your private keys always store in the device local storage and never on our servers. 

### Why Nucle is default to 12-word recovery phrase (mnemonic seed) ?
We reviewed the current blockchain industry and concluded that 12-word seed is the best balanced design between providing the best user experiences and security. In terms of security, 12-word is secure enough to against brute force attack. For further details, we recommend [this article](https://thechiaplot.net/2021/08/23/lets-talk-about-nucle-and-chia-wallet-security/) on why 12/24 word wallet security is essentially the same.

### What happens if I delete my wallet ?
The private key will be removed from the device local storage. As long as you remember the your 12/24-word recovery phrases you can import it again and gain access to available funds.

### Why do I need a password for Nucle if it’s decentralized ?
The password is there to protect you from leaving your wallet exposed and/or prevent unnecessary transactions. The password is a lock on the application, not your private keys.

### Are there any fees when using Nucle ?
You are free to use Nucle just like you would the Chia full node wallet without paying any extra fees. However, depending on the Chia blockchain network traffic, transactions may require transaction fees on top of the amount you are transferring. We default to 0 at this time because there are currently not enough network congestion to incur fees.

### Why does not my wallet balance automatically update ?
There are technical difficulties and server costs which force use to be nimble and require users to manually refresh for updates.

### What wallet address is used when I import/create a wallet?
Nucle uses something called “First Wallet Address”. If you go to the CLI and type in “chia keys show”, there will be a field called “First Wallet Address” which is what all future SPV wallets will use in reference to your mnemonic seed (Recovery Phrases). This means whenever you import your phrases into Nucle, whether on Mobile, Web, or Extension, it will always use this same “First Wallet Address”. 

### Where is my wallet history ?
We are currently using [Chia Explorer](https://chiaexplorer.com) to scan for on-chain transactions. Due to some technical difficulties and the need for additional on-chain support from Chia, we are unable to gather all the history of your wallet at this time. Nucle is only aware of your wallet once you start using it for transactions.

### What language is Nucle written in ?
JavaScript/TypeScript

### What is Tails ?
Tails is an experimental non-transferable token that serves solely for exploring the powerful of [Chialisp](https://chialisp.com). More details coming soon, stay tuned.
