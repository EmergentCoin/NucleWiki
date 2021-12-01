---
title: Nucle Wallet
---
# Nucle

Nucle wallet is the first decentralized SPV wallet for [Chia blockchain](https://chia.net). Your first step to the Chia Defi world!

## Frequently Asked Questions

### What is an SPV wallet?

SPV stands for *Simplified Payment Verification* which allows you to use Chia without running a full node. Since Chia is using a model that is similar to Bitcoin's UTXO, a further explanation can be found [here](https://en.bitcoinwiki.org/wiki/Simplified_Payment_Verification).

### How does Nucle achieve decentralization for its wallet? Is Nucle safe?

Nucle is a decentralized wallet, just like the Chia full node wallet. The first and the most critical Crypto 101 rule is **Not Your keys, Not Your Crypto**. We believe in this rule, and that's why on Nucle, your private keys never leave your device or transmit through our server in any way. Nucle wallet also generates private keys purely in your local machine and does not require an Internet connection.

The way Nucle makes transactions:

- The Nucle app on your local device is responsible for signing transactions using the private keys from your local storage.
- The signed transaction will then be sent to our servers for broadcasting. During this process, your keys stay where they should be, **on your local device and never on our servers**.

### **Where is the source code?**

You can find the source code in our [GitHub repository](https://github.com/EmergentCoin/NucleWallet). Thanks for [The Chia Plot](https://thechiaplot.net) composing a brief review [article](https://thechiaplot.net/2021/12/01/a-brief-review-of-nucle-chia-wallet-code/) for us.

### Why should I use Nucle instead of Chia full node wallet?

Nucle is not a replacement for Chia's full node wallet. There are certain limitations for both SPV wallet and full node wallet.

- Nucle is an excellent hot wallet for day-to-day use, while full node wallets are suitable for cold storage.
- Full node wallets require a longer time to sync and disk space for the blockchain before a user can make transactions or browse the latest history. This is because a full node wallet will verify every block and every transaction that is inside the block, giving it the highest accuracy and security. In comparison, the SPV wallet does not verify every transaction nor inspect the whole block.
- Besides being used as a regular use hot wallet, Nucle focuses on being ready for the Chia Decentralized Finance (Defi) ecosystem. Nucle is very lightweight and can run on many platforms and systems, such as browser extensions, mobile phones, and webpages.

### Why does Nucle default to a 12-word recovery phrase (mnemonic seed)?

We reviewed the current blockchain industry and concluded that 12-word seed is the best balancing design between providing the best user experiences and security. In terms of security, 12-word is secure enough to against brute force attack. For more details, we recommend [this article](https://thechiaplot.net/2021/08/23/lets-talk-about-nucle-and-chia-wallet-security/) on why both 12 and 24 words wallet's security are essentially the same.

### Is the Nucle seed the same as the Chia full node wallet seed?

Yes. Think of a seed as a tree and a wallet address as a branch. When you import a seed to the native Chia wallet, it sees all branches (addresses) for that tree since it is a FULL blockchain wallet. When you import into Nucle the seed, it is the same tree (seed). But Nucle is an SPV wallet, which means it only sees the first branch of "first wallet address." Nucle does not track all the branches as a full blockchain wallet does. That's why Nucle is a lightweight wallet since it only tracks a single wallet address of a seed that can contain infinite branches/addresses. It is important to note that the Chia full node wallet still has some updates on its roadmap to add electrum-like functionality to track all addresses. That means at this time, the Chia blockchain wallet doesn't track the 'first wallet address,' but it will eventually.

### But what about the 12-word Nucle wallet?

At a fundamental level, 12/24-word wallets are similar in level of security. Currently, the Chia full node wallet does not support a 12-word wallet, but it might in the future. Anyways, SPV wallets are more common for everyday use. The majority of consumer wallets today all use 12-word wallets, so this should be the prevailing technology in the future. The minimally added security of a 24 vs. 12-word wallet generally doesn't outweigh the convenience of a 12-word one.

### What happens if I delete my wallet?

The private key will be removed from the device's local storage. As long as you remember your 12/24-word recovery phrases, you can reimport them again and gain back access to your available funds.

### Why do I need a password for Nucle if it's decentralized?

The password is there to protect you from leaving your wallet exposed and prevent unnecessary transactions. The password is a lock on the application, not your private keys.

### Are there any fees when using Nucle?

You are free to use Nucle just like you would on the Chia full node wallet without paying any extra fees. However, depending on the Chia blockchain network traffic, transactions may require transaction fees on top of the amount you are transferring. We default to 0 at this time because there is currently not enough network congestion to incur fees.

### Why does not my wallet balance automatically update?

There are technical difficulties and server costs that force us to be nimble and require users to refresh for updates manually.

### What is the wallet address used when I import/create a wallet?

Nucle uses something called "First Wallet Address." If you go to the CLI and type in "chia keys show," there will be a field called "First Wallet Address," which is what all future SPV wallets will use on your mnemonic seed (Recovery Phrases). This means whenever you import your phrases into Nucle, whether on Mobile, Web, or Extension, it will always use this same "First Wallet Address."

### Where is my wallet history?

We are currently using [Chia Explorer](https://chiaexplorer.com) for on-chain inspections. Due to some technical difficulties and the need for additional on-chain support from Chia, we are unable to gather all the history of your wallet at this time. Nucle is only aware of your wallet once you start using it for transactions.

### What language is Nucle written in?

JavaScript/TypeScript

### What are the Tails?

The Tail is an experimental non-transferable token that serves solely for exploring the power of [Chialisp](https://chialisp.com). More details are coming soon. Stay tuned.
