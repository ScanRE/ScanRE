import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./containers/landing/Landing";
import Home from "./containers/Home";
import FindingDetail from "./containers/FindingDetail";
import Loader from "./components/Loader";
import axios from "axios";

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
				<Route
					path="/"
					element={
						<Landing
							scanError={scanError}
							setRepoURL={setRepoURL}
						/>
					}
				/>
				<Route
					path="/home"
					element={
						scanError ? (
							<Landing
								scanError={scanError}
								setRepoURL={setRepoURL}
							/>
						) : isLoading ? (
							<Loader />
						) : (
							<Home
								scanResData={scanResData}
								scanError={scanError}
								setFinding={setFinding}
								setScanResData={setScanResData}
							/>
						)
					}
				/>
				<Route
					path="/home/findingDetail/:id"
					element={<FindingDetail finding={finding} />}
				/>
			</Routes>
		</>
	);
}

export default App;
