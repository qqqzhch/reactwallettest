import './global.css'
import { Web3OnboardProvider, init } from '@web3-onboard/react'
import { useWeb3React, Web3ReactHooks, Web3ReactProvider } from '@web3-react/core'
import injectedModule from '@web3-onboard/injected-wallets'
import { MetaMask } from '@web3-react/metamask'
import { hooks as metaMaskHooks, metaMask } from '../web3-data-provider/connectors/metaMask'
import { hooks as coinbaseHooks, coinbaseWallet} from '../web3-data-provider/connectors/coinbaseWallet'
import { hooks as gnosisSafeHooks, gnosisSafe} from '../web3-data-provider/connectors/gnosisSafe'
import { hooks as walletConnectHooks, walletConnect} from '../web3-data-provider/connectors/walletConnect'
//https://github.com/Uniswap/web3-react/blob/9a5d6207c54457de7081755d5d69e5bd7c9fda31/packages/example-next/components/ProviderExample.tsx
const INFURA_KEY = ''

const ethereumRopsten = {
  id: '0x1',
  token: 'ETH',
  label: 'Ethereum Ropsten',
  rpcUrl: `https://eth-mainnet.alchemyapi.io/v2/_-mMjxdfTD-C6NBe24iwXsLFelLocsei`
}

const polygonMainnet = {
  id: '0x89',
  token: 'MATIC',
  label: 'Polygon',
  rpcUrl: 'https://matic-mainnet.chainstacklabs.com'
}

const connectors= [
  [walletConnect, walletConnectHooks],
  [metaMask, metaMaskHooks],
  // [coinbaseWallet, coinbaseWalletHooks],
]




export default function App({ Component, pageProps }) {
    return   <Web3ReactProvider connectors={connectors}>
              <Component {...pageProps} />
              </Web3ReactProvider>
  }