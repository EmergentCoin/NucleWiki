"use strict";(self.webpackChunknucle_wiki=self.webpackChunknucle_wiki||[]).push([[844],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return p}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(a),p=r,y=d["".concat(s,".").concat(p)]||d[p]||h[p]||l;return a?n.createElement(y,i(i({ref:t},c),{},{components:a})):n.createElement(y,i({ref:t},c))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8105:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={title:"Nucle Wallet"},s="Nucle",u={type:"mdx",permalink:"/",source:"@site/src/pages/index.md"},c=[{value:"Frequently Asked Questions",id:"frequently-asked-questions",children:[{value:"What is an SPV wallet?",id:"what-is-an-spv-wallet",children:[]},{value:"How does Nucle achieve decentralization for its wallet? Is Nucle safe?",id:"how-does-nucle-achieve-decentralization-for-its-wallet-is-nucle-safe",children:[]},{value:"Why should I use Nucle instead of Chia full node wallet?",id:"why-should-i-use-nucle-instead-of-chia-full-node-wallet",children:[]},{value:"Why does Nucle defaults to a 12-word recovery phrase (mnemonic seed)?",id:"why-does-nucle-defaults-to-a-12-word-recovery-phrase-mnemonic-seed",children:[]},{value:"What happens if I delete my wallet?",id:"what-happens-if-i-delete-my-wallet",children:[]},{value:"Why do I need a password for Nucle if it\u2019s decentralized?",id:"why-do-i-need-a-password-for-nucle-if-its-decentralized",children:[]},{value:"Are there any fees when using Nucle?",id:"are-there-any-fees-when-using-nucle",children:[]},{value:"Why does not my wallet balance automatically update?",id:"why-does-not-my-wallet-balance-automatically-update",children:[]},{value:"What wallet address is used when I import/create a wallet?",id:"what-wallet-address-is-used-when-i-importcreate-a-wallet",children:[]},{value:"Where is my wallet history?",id:"where-is-my-wallet-history",children:[]},{value:"What language is Nucle written in?",id:"what-language-is-nucle-written-in",children:[]},{value:"What is the Tails?",id:"what-is-the-tails",children:[]}]}],h={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"nucle"},"Nucle"),(0,l.kt)("p",null,"Nucle wallet is the first decentralized SPV wallet for ",(0,l.kt)("a",{parentName:"p",href:"https://chia.net"},"Chia blockchain"),". Your first step to the Chia Defi world! "),(0,l.kt)("h2",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,l.kt)("h3",{id:"what-is-an-spv-wallet"},"What is an SPV wallet?"),(0,l.kt)("p",null,"SPV stands for ",(0,l.kt)("em",{parentName:"p"},"Simplified Payment Verification")," which allows you to use Chia without running a full node. Since Chia is using a model that is similar to Bitcoin's UTXO, further explanation can be found ",(0,l.kt)("a",{parentName:"p",href:"https://en.bitcoinwiki.org/wiki/Simplified_Payment_Verification"},"here"),"."),(0,l.kt)("h3",{id:"how-does-nucle-achieve-decentralization-for-its-wallet-is-nucle-safe"},"How does Nucle achieve decentralization for its wallet? Is Nucle safe?"),(0,l.kt)("p",null,"Nucle is a decentralized wallet just like the Chia full node wallet. The first and the most important Crypto 101 rule is ",(0,l.kt)("strong",{parentName:"p"},"Not Your keys, Not Your Crypto"),". We believe in this rule and that's why on Nucle your private keys never leave your device or transmit through our server in any way. "),(0,l.kt)("p",null,"The way Nucle makes transactions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The Nucle app on your local device is responsible for signing transactions using the private keys from your local storage."),(0,l.kt)("li",{parentName:"ul"},"The signed transaction will then be sent to our servers for broadcasting. During this process, your keys stay where they should be, ",(0,l.kt)("strong",{parentName:"li"},"on your local device and never on our servers"),".")),(0,l.kt)("p",null,"The source code of Nucle already passed the Chia Network team's review and is currently under penetration testing. It will be released on our Github repository at the end of October 2021."),(0,l.kt)("h3",{id:"why-should-i-use-nucle-instead-of-chia-full-node-wallet"},"Why should I use Nucle instead of Chia full node wallet?"),(0,l.kt)("p",null,"Nucle is not a replacement for Chia's full node wallet. There are certain limitations for both SPV wallet and full node wallet."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Nucle is a great hot wallet for day-to-day use while full node wallets are good for cold storage."),(0,l.kt)("li",{parentName:"ul"},"Full node wallets require a longer time to sync and disk space for the blockchain before a user can make transactions or browsing the latest history. This is because a full node wallet will verify every block and every transaction that is inside the block, giving it the highest accuracy and security. In comparison, the SPV wallet does not verify every transaction nor inspect the whole block."),(0,l.kt)("li",{parentName:"ul"},"Besides being used as a regular use hot wallet, Nucle is focused on being ready for the Chia Decentralized Finance (Defi) ecosystem. Nucle is very lightweight and can run on many platforms and systems, such browser extensions, mobile phones, and webpages.")),(0,l.kt)("h3",{id:"why-does-nucle-defaults-to-a-12-word-recovery-phrase-mnemonic-seed"},"Why does Nucle defaults to a 12-word recovery phrase (mnemonic seed)?"),(0,l.kt)("p",null,"We reviewed the current blockchain industry and concluded that 12-word seed is the best balancing design between providing the best user experiences and security. In terms of security, 12-word is secure enough to against brute force attack. For more details, we recommend ",(0,l.kt)("a",{parentName:"p",href:"https://thechiaplot.net/2021/08/23/lets-talk-about-nucle-and-chia-wallet-security/"},"this article")," on why both 12 and 24 words wallet's security are essentially the same."),(0,l.kt)("h3",{id:"what-happens-if-i-delete-my-wallet"},"What happens if I delete my wallet?"),(0,l.kt)("p",null,"The private key will be removed from the device's local storage. As long as you remember your 12/24-word recovery phrases you can reimport them again and gain back access to your available funds."),(0,l.kt)("h3",{id:"why-do-i-need-a-password-for-nucle-if-its-decentralized"},"Why do I need a password for Nucle if it\u2019s decentralized?"),(0,l.kt)("p",null,"The password is there to protect you from leaving your wallet exposed and/or prevent unnecessary transactions. The password is a lock on the application, not your private keys."),(0,l.kt)("h3",{id:"are-there-any-fees-when-using-nucle"},"Are there any fees when using Nucle?"),(0,l.kt)("p",null,"You are free to use Nucle just like you would on the Chia full node wallet without paying any extra fees. However, depending on the Chia blockchain network traffic, transactions may require transaction fees on top of the amount you are transferring. We default to 0 at this time because there is currently not enough network congestion to incur fees."),(0,l.kt)("h3",{id:"why-does-not-my-wallet-balance-automatically-update"},"Why does not my wallet balance automatically update?"),(0,l.kt)("p",null,"There are technical difficulties and server costs that force us to be nimble and require users to manually refresh for updates."),(0,l.kt)("h3",{id:"what-wallet-address-is-used-when-i-importcreate-a-wallet"},"What wallet address is used when I import/create a wallet?"),(0,l.kt)("p",null,"Nucle uses something called \u201cFirst Wallet Address\u201d. If you go to the CLI and type in \u201cchia keys show\u201d, there will be a field called \u201cFirst Wallet Address\u201d which is what all future SPV wallets will use on your mnemonic seed (Recovery Phrases). This means whenever you import your phrases into Nucle, whether on Mobile, Web, or Extension, it will always use this same \u201cFirst Wallet Address\u201d. "),(0,l.kt)("h3",{id:"where-is-my-wallet-history"},"Where is my wallet history?"),(0,l.kt)("p",null,"We are currently using ",(0,l.kt)("a",{parentName:"p",href:"https://chiaexplorer.com"},"Chia Explorer")," for on-chain inspections. Due to some technical difficulties and the need for additional on-chain support from Chia, we are unable to gather all the history of your wallet at this time. Nucle is only aware of your wallet once you start using it for transactions."),(0,l.kt)("h3",{id:"what-language-is-nucle-written-in"},"What language is Nucle written in?"),(0,l.kt)("p",null,"JavaScript/TypeScript"),(0,l.kt)("h3",{id:"what-is-the-tails"},"What is the Tails?"),(0,l.kt)("p",null,"The Tails is an experimental non-transferable token that serves solely for exploring the power of ",(0,l.kt)("a",{parentName:"p",href:"https://chialisp.com"},"Chialisp"),". More details coming soon, stay tuned."))}d.isMDXComponent=!0}}]);