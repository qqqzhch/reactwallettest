import { initializeConnector } from '@web3-react/core'
import { MetaMask } from '@web3-react/metamask'
console.log('initializeConnector',initializeConnector)
export const [metaMask, hooks] = initializeConnector((actions) => new MetaMask({ actions }))
