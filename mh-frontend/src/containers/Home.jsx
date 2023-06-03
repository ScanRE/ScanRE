import React, { useState } from "react";
import Overview from "./Overview";
import Findings from "./Findings";
import PotentialFindings from "./PotentialFindings";

const Home = () => {
	const [activeTab, setActiveTab] = useState("Overview");

	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};

	return (
		<div>
			<div className="tabs tabs-boxed">
				<a
					className={`tab ${
						activeTab === "Overview" ? "tab-active" : ""
					}`}
					onClick={() => handleTabClick("Overview")}
				>
					Overview
				</a>
				<a
					className={`tab ${
						activeTab === "Findings" ? "tab-active" : ""
					}`}
					onClick={() => handleTabClick("Findings")}
				>
					Findings
				</a>
				<a
					className={`tab ${
						activeTab === "PotentialFindings" ? "tab-active" : ""
					}`}
					onClick={() => handleTabClick("PotentialFindings")}
				>
					Potential Findings
				</a>
			</div>
			<div>
				{activeTab === "Overview" && <Overview />}
				{activeTab === "Findings" && <Findings />}
				{activeTab === "PotentialFindings" && <PotentialFindings />}
			</div>
		</div>
	);
};

export default Home;
