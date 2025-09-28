
import { Suspense } from 'react'
import './App.css'
import Daisynav from './components/DaisyNav/Daisynav'
import Navbar from './components/Navbar/Navbar'
import PricingOptions from './components/PricingOptions/PricingOptions'

const pricingPromise=fetch('pricingData.json').then(res=>res.json())

function App() {
  
  return (
    <>
      
      <header>
        <Navbar></Navbar>
        {/* <Daisynav></Daisynav> */}
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-ring loading-lg flex mx-auto"></span>
}>
          <PricingOptions pricingPromise={pricingPromise}>

          </PricingOptions>
        </Suspense>
      </main>

    </>
  )
}

export default App
