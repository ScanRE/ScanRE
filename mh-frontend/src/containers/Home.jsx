import { useState, useEffect } from "react";
import Overview from "./Overview";
import Findings from "./Findings";
import PotentialFindings from "./PotentialFindings";

const Home = ({ scanResData, scanError, setFinding }) => {
	const [activeTab, setActiveTab] = useState("Overview");

	useEffect(() => {}, []);

	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};

	return (
		<div>
			<div className="p-4 mx-6">
				<div className="p-4 tabs tabs-boxed font-bold flex items-center gap-4">
					<a
						className={`tab ${
							activeTab === "Overview"
								? "tab-active text-base"
								: ""
						}`}
						onClick={() => handleTabClick("Overview")}
					>
						Overview
					</a>
					<a
						className={`tab ${
							activeTab === "Findings"
								? "tab-active text-base"
								: ""
						}`}
						onClick={() => handleTabClick("Findings")}
					>
						Findings
					</a>
					<a
						className={`tab ${
							activeTab === "PotentialFindings"
								? "tab-active text-base"
								: ""
						}`}
						onClick={() => handleTabClick("PotentialFindings")}
					>
						Potential Findings
					</a>
				</div>
				<div>
					{activeTab === "Overview" && (
						<Overview scanResData={scanResData} />
					)}
					{activeTab === "Findings" && (
						<Findings
							scanResData={scanResData}
							setFinding={setFinding}
						/>
					)}
					{activeTab === "PotentialFindings" && <PotentialFindings />}
				</div>
			</div>
		</div>
	);
};

export default Home;
