import './App.css'
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Landing from "./containers/landing/Landing";
import Home from "./containers/Home";
import FindingDetail from "./containers/FindingDetail";
import Pricing from './containers/pricing/Pricing';

function App() {
    const [scanResData, setScanResData] = useState();
    const [scanError, setScanError] = useState();

  return (
      <>
          <Routes>
              <Route path="/" element={<Landing setScanResData={setScanResData} setScanError={setScanError} />} />
              <Route
                  path="/home"
                  element={
                      scanResData ? (
                          <Home scanResData={scanResData} scanError={scanError} />
                      ) : (
                          <Home scanResData={scanResData} scanError={scanError} />
                      )
                  }
              />
              <Route path="/findingDetail/*" element={<FindingDetail />} />
              <Route path="/pricing" element={<Pricing />} />
          </Routes>
      </>
  );
}

export default App;
