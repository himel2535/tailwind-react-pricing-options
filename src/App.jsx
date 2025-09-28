import { Suspense } from "react";
import "./App.css";
import Daisynav from "./components/DaisyNav/Daisynav";
import Navbar from "./components/Navbar/Navbar";
import PricingOptions from "./components/PricingOptions/PricingOptions";
import ResultsChart from "./components/ResultsChart/ResultsChart";
import ResultPromise from "./components/resultPromise/ResultPromise";

const pricingPromise = fetch("pricingData.json").then((res) => res.json());

const resultData = fetch("result.json").then((res) => res.json());

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
        {/* <Daisynav></Daisynav> */}
      </header>
      <main>
        <Suspense
          fallback={
            <span className="loading loading-ring loading-lg flex mx-auto"></span>
          }
        >
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>

        <Suspense>
          <ResultsChart resultData={resultData}></ResultsChart>
        </Suspense>
        {/* <Suspense>
          <ResultPromise resultData={resultData}></ResultPromise>
        </Suspense> */}
      </main>
    </>
  );
}

export default App;
