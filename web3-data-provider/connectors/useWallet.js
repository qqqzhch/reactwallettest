import { hooks as mmhooks, metaMask } from './metaMask'
import { walletConnect, hooks as wchooks } from './walletConnect'
import { coinbaseWallet, hooks as cwhooks } from './coinbaseWallet'
import { useEffect,useState } from 'react'

export function useWallet(walletName){
     let [hooks,setHooks]=useState(null);
     let [wallet,setWallet]=useState(null);
     useEffect(()=>{
         console.log('walletName',walletName)
        if(walletName=="metaMask"){
            setWallet(metaMask)
            setHooks(mmhooks)
         }
         if(walletName=="walletConnect"){
             setWallet(walletConnect)
             setHooks(wchooks)
    
         }
         if(walletName=="coinbaseWallet"){
            setWallet(coinbaseWallet)
            setHooks(cwhooks)
    
         }

     },[walletName])
    return {
        hooks,
        wallet
    }


}
