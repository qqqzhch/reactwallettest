

import { useEffect, useState } from 'react'
import { useWeb3React, Web3ReactHooks, Web3ReactProvider } from '@web3-react/core'
import { hooks as metaMaskHooks, metaMask } from './connectors/metaMask'


// const { useChainId, useAccounts, useIsActivating, useIsActive, useProvider, useENSNames } = hooks

const connectors = [
  [metaMask, metaMaskHooks],
  // [walletConnect, walletConnectHooks],
  // [coinbaseWallet, coinbaseWalletHooks],
  // [network, networkHooks],
]
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