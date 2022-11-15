import './global.css'
import { Web3OnboardProvider, init } from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'

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

const chains = [ethereumRopsten, polygonMainnet]

const wallets = [injectedModule()]

const appMetadata = {
  name: 'Connect Wallet Example',
  icon: '<svg>My App Icon</svg>',
  description: 'Example showcasing how to connect a wallet.',
  recommendedInjectedWallets: [
    { name: 'MetaMask', url: 'https://metamask.io' },
    { name: 'Coinbase', url: 'https://wallet.coinbase.com/' }
  ]
}

const web3Onboard = init({
  wallets,
  chains,
  appMetadata
})


export default function App({ Component, pageProps }) {
    return  <Web3OnboardProvider web3Onboard={web3Onboard}>
              <Component {...pageProps} />
            </Web3OnboardProvider>
  }