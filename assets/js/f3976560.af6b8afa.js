"use strict";(self.webpackChunknucle_wiki=self.webpackChunknucle_wiki||[]).push([[844],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,p=d["".concat(s,".").concat(f)]||d[f]||h[f]||l;return n?a.createElement(p,i(i({ref:t},c),{},{components:n})):a.createElement(p,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8105:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={title:"Nucle Wallet"},s="Nucle",u={type:"mdx",permalink:"/",source:"@site/src/pages/index.md"},c=[{value:"Frequently Asked Questions",id:"frequently-asked-questions",children:[{value:"What is a SPV wallet ?",id:"what-is-a-spv-wallet-",children:[]},{value:"Why should I use Nucle instead of Chia full node wallet ?",id:"why-should-i-use-nucle-instead-of-chia-full-node-wallet-",children:[]},{value:"Is Nucle safe ?",id:"is-nucle-safe-",children:[]},{value:"Why Nucle is default to 12-word recovery phrase (mnemonic seed) ?",id:"why-nucle-is-default-to-12-word-recovery-phrase-mnemonic-seed-",children:[]},{value:"What happens if I delete my wallet ?",id:"what-happens-if-i-delete-my-wallet-",children:[]},{value:"Are there any fees when using Nucle?",id:"are-there-any-fees-when-using-nucle",children:[]},{value:"Why does not my wallet balance automatically update?",id:"why-does-not-my-wallet-balance-automatically-update",children:[]},{value:"What is Tails?",id:"what-is-tails",children:[]}]}],h={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"nucle"},"Nucle"),(0,l.kt)("p",null,"Nucle wallet is the first SPV wallet for ",(0,l.kt)("a",{parentName:"p",href:"https://chia.net"},"Chia blockchain"),". Your first gateway to the Chia DeFi world.   "),(0,l.kt)("h2",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,l.kt)("h3",{id:"what-is-a-spv-wallet-"},"What is a SPV wallet ?"),(0,l.kt)("p",null,"SPV stands for ",(0,l.kt)("em",{parentName:"p"},"Simplified Payment Verification")," which allows you use Chia without running a full node. Since Chia is using the model that similar to Bitcoin's UTXO, further explanation can be found at ",(0,l.kt)("a",{parentName:"p",href:"https://en.bitcoinwiki.org/wiki/Simplified_Payment_Verification"},"here"),"."),(0,l.kt)("h3",{id:"why-should-i-use-nucle-instead-of-chia-full-node-wallet-"},"Why should I use Nucle instead of Chia full node wallet ?"),(0,l.kt)("p",null,"Nucle is not a replacement for Chia full node wallet. There are certain limitations for both SPV wallet and full node wallet."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Nucle serves very well as a hot wallet for day to day use while full node wallet is good for cold storage. "),(0,l.kt)("li",{parentName:"ul"},"Full node wallet requires relative long time and large disk space to sync before able to make transactions or browser latest history because it will verify every block and every transaction that contains inside the block for the highest accuracy and security. However, SPV wallet does not verify every transaction and inspect the whole block."),(0,l.kt)("li",{parentName:"ul"},"Besides being use as a regular hot wallet, Nucle is focus on ready for Chia DeFi ecosystem. Nucle is very lightweight and able to run on many compact platforms and systems, such browser extensions, mobile phones, and webpage. ")),(0,l.kt)("h3",{id:"is-nucle-safe-"},"Is Nucle safe ?"),(0,l.kt)("p",null,"Nucle is a decentralized wallet just like the Chia full node wallet. Your private key alway store in the device local storage."),(0,l.kt)("h3",{id:"why-nucle-is-default-to-12-word-recovery-phrase-mnemonic-seed-"},"Why Nucle is default to 12-word recovery phrase (mnemonic seed) ?"),(0,l.kt)("p",null,"We evaluated the blockchain industry and concluded that 12-word seed is the most balancing design between providing the best user experiences and the security. In terms of security, 12-word is secure enough to against brute force attack."),(0,l.kt)("h3",{id:"what-happens-if-i-delete-my-wallet-"},"What happens if I delete my wallet ?"),(0,l.kt)("p",null,"The private key will be removed from the device. As long as you remember the 12/24-word recovery phrases you can import it again and gain access available funds."),(0,l.kt)("h3",{id:"are-there-any-fees-when-using-nucle"},"Are there any fees when using Nucle?"),(0,l.kt)("p",null,"You are free to use Nucle just like the Chia full node wallet without paying extra fees. However, depending on the Chia blockchain network traffic, making transactions may require network fees on top of the amount you are transferring. We default to 0 at this time because the network traffic is relative low."),(0,l.kt)("h3",{id:"why-does-not-my-wallet-balance-automatically-update"},"Why does not my wallet balance automatically update?"),(0,l.kt)("p",null,"There are technical difficulties that we have to compromised at this time."),(0,l.kt)("h3",{id:"what-is-tails"},"What is Tails?"),(0,l.kt)("p",null,"Tails is an experimental non-transferable token that serves solely for explore ",(0,l.kt)("a",{parentName:"p",href:"https://chialisp.com"},"Chialisp"),". Visit ",(0,l.kt)("strong",{parentName:"p"},"here")," for the latest information."))}d.isMDXComponent=!0}}]);