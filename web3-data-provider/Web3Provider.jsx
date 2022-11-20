

import { useEffect, useState } from 'react'
import { useWeb3React, Web3ReactHooks, Web3ReactProvider } from '@web3-react/core'
import { hooks as metaMaskHooks, metaMask } from './connectors/metaMask'
import { hooks as coinbaseHooks, coinbaseWallet} from './connectors/coinbaseWallet'
import { hooks as gnosisSafeHooks, gnosisSafe} from './connectors/gnosisSafe'
import { hooks as walletConnectHooks, walletConnect} from './connectors/walletConnect'


// const { useChainId, useAccounts, useIsActivating, useIsActive, useProvider, useENSNames } = hooks

export const connectors = [
  [metaMask, metaMaskHooks],
  [walletConnect, walletConnectHooks],
  // [coinbaseWallet, coinbaseWalletHooks],

]
console.log('connectors',connectors)
export default function Web3ContextProvider({children}) {
  console.log('00000')
  // const chainId = useChainId()
  // const accounts = useAccounts()
  // const isActivating = useIsActivating()

  // const isActive = useIsActive()

  // const provider = useProvider()
  // const ENSNames = useENSNames(provider)

  // const [error, setError] = useState(undefined)
  // console.log('****************')
  // // attempt to connect eagerly on mount
  // useEffect(() => {
  //   void metaMask.connectEagerly().catch(() => {
  //     console.debug('Failed to connect eagerly to metamask')
  //   })
  // }, [])

  return (
    <div>
      <Web3ReactProvider connectors={connectors}>
      {children}11
    </Web3ReactProvider>
    </div>
  )
}