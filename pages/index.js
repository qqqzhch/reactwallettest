import Head from 'next/head'
import Link from 'next/link'
import { useEffect,useState } from 'react'

import { ethers } from 'ethers'
import { useCallback } from 'react'
import { useWeb3React, Web3ReactHooks,  } from '@web3-react/core'
import {connectors} from '../web3-data-provider/Web3Provider'



//https://github.com/Uniswap/interface/blob/main/src/connection/index.ts
//https://github.com/Uniswap/interface/blob/main/src/components/WalletModal/WalletConnectOption.tsx
export default function Home(props) {
  
  // console.log('connector',connector)  
  // console.log('chainId',chainId)
  // console.log('accounts',accounts)
  // console.log(
  //   chainId,
  //   accounts,
  //   isActivating,
  //   account,
  //   isActive,
  //   provider,
  //   ENSNames,
  //   ENSName,
  //   hooks)
  // let {wallet} = useWallet('walletConnect')

  
  const {hooks} = useWeb3React()
  const test = useWeb3React()
  console.log('useWeb3React',test)
  let connector = connectors[0][0]
  const {useSelectedAccounts,useSelectedChainId,useSelectedProvider, } = hooks
  
  console.log('connector',connector)
  let useraccounts = useSelectedAccounts(connector)
  let userChainId =  useSelectedChainId(connector)
  // const isActive = useIsActive()
  // let chainId=useChainId()
  // let accounts=useAccounts();
  // let provider = useProvider();
  // console.log(chainId,accounts,provider )


  // const [{ wallet, connecting }, connect, disconnect,addresses] = useConnectWallet()
  // const all = useConnectWallet()
  // const [
  //   {
  //     chains, // the list of chains that web3-onboard was initialized with
  //     connectedChain, // the current chain the user's wallet is connected to
  //     settingChain // boolean indicating if the chain is in the process of being set
  //   },
  //   setChain // function to call to initiate user to switch chains in their wallet
  // ] = useSetChain()
  // const [ethersProvider, setProvider] = useState()
  // console.log('connectedChain',connectedChain)
  // console.log('wallet',wallet)
  // console.log('ethersProvider',ethersProvider)
  // console.log('all',all)
  
  //根据ethersProvider 介入合约操作
  /**
   * 
  const signer = provider.getUncheckedSigner()

  const txDetails = {
    to: toAddress,
    value: 1000000000000000
  }

  const sendTransaction = () => {
    return signer.sendTransaction(txDetails).then(tx => tx.hash)
  }
  */


  useEffect(() => {
    // If the wallet has a provider than the wallet is connected
    connector.connectEagerly()
  },[])
  

 let desiredChainId=1;
  const onClick = useCallback((connectorSelect) => {
    // console.log('connector',connector)
    // console.log('walletConnect',walletConnect)
    //  walletConnect.activate(desiredChainId)
    connectorSelect.activate(1)
    // if (connector instanceof GnosisSafe) {
    //   connector
    //     .activate()
    //     .catch(setError)
    // } else if (connector instanceof WalletConnect || connector instanceof Network) {
    //   connector
    //     .activate(desiredChainId === -1 ? undefined : desiredChainId)
    //     .catch(setError)
    // } else {
    //   connector
    //     .activate(desiredChainId === -1 ? undefined : getAddChainParameters(desiredChainId))
    //     .catch(setError)
    // }
  }, [connector, desiredChainId])

  return (
    <div className="container">
      <Head>
        <title>Create Next App  hah111a</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
        <Link href="/demo">this page!</Link>
        </h1>
        {connectors.map((item)=>{
          return <button onClick={()=>{onClick(item[0])}}>
          Connect
        </button>
        })}
        {
          useraccounts
        }
        {
          userChainId
        }

        <p className="description">
          {props.hello}|Get started by editing <code>pages/index.js</code>
        </p>
        

        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

// export async function getStaticProps() {
//   // Get external data from the file system, API, DB, etc.
//   const data ={
//     hello:"xxxx"
//   }
//   const res = await fetch('https://www.nextjs.cn/learn/basics/data-fetching/getstaticprops-details')
//   let data =  res.text()
//   const data ={
//     hello:"xxxx",
//     data:data
//   }

//   // The value of the `props` key will be
//   //  passed to the `Home` component
//   return {
//     props: data
//   }
// }
