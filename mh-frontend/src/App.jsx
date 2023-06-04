import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./containers/landing/Landing";
import Home from "./containers/Home";
import FindingDetail from "./containers/FindingDetail";
import Loader from "./components/Loader";
import axios from "axios";
import Pricing from './containers/pricing/Pricing';

function App() {
	const [scanResData, setScanResData] = useState();
	const [scanError, setScanError] = useState("");
	const [repoURL, setRepoURL] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const [finding, setFinding] = useState();

	useEffect(() => {
		setIsLoading(true);
		axios
			.get(`http://127.0.0.1:5000/`)
			.then((res) => {
				setScanResData(res.data);
				setScanError("");
				setIsLoading(false);
			})
			.catch((err) => {
				setScanError(err);
				setIsLoading(false);
			});
	}, [repoURL]);

  return (
      <>
          <Routes>
              <Route path="/" element={<Landing setScanResData={setScanResData} setScanError={setScanError} />} />
              <Route
                  path="/home"
                  element={
                      scanResData ? (
                          <Home scanResData={scanResData} scanError={scanError} setFinding={setFinding} />
                      ) : (
                          <Loader />
                      )
                  }
              />
              <Route path="/home/findingDetail/*" element={<FindingDetail finding={finding} />} />
              <Route path="/pricing" element={<Pricing />} />
          </Routes>
      </>
  );
}

export default App;
