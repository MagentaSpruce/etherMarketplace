
import { Hero, Breadcrumbs } from "@components/common"
import { BaseLayout } from "@components/layout"
import { OrderCard } from "@components/order"
import { EthRates, WalletBar } from "@components/web3"

export default function Home() {
  return (  
      <>
            <Hero />
            <Breadcrumbs />
            <WalletBar />
            <EthRates />
            <OrderCard />
                    
      </>  
  )
}

Home.Layout = BaseLayout