import { useState, useEffect } from "react";
import Overview from "./Overview";
import Findings from "./Findings";
import PotentialFindings from "./PotentialFindings";

const Home = ({ scanResData, scanError }) => {
    const [activeTab, setActiveTab] = useState("Overview");

    useEffect(() => {
        
    }, []);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <div className="p-4 mx-6">
                <div className="tabs tabs-boxed font-bold flex gap-4">
                    <a
                        className={`tab ${activeTab === "Overview" ? "tab-active text-base" : ""}`}
                        onClick={() => handleTabClick("Overview")}
                    >
                        Overview
                    </a>
                    <a
                        className={`tab ${activeTab === "Findings" ? "tab-active text-base" : ""}`}
                        onClick={() => handleTabClick("Findings")}
                    >
                        Findings
                    </a>
                    <a
                        className={`tab ${activeTab === "PotentialFindings" ? "tab-active text-base" : ""}`}
                        onClick={() => handleTabClick("PotentialFindings")}
                    >
                        Potential Findings
                    </a>
                </div>
                <div>
                    {activeTab === "Overview" && <Overview scanResData={scanResData} scanError={scanError} />}
                    {activeTab === "Findings" && <Findings />}
                    {activeTab === "PotentialFindings" && <PotentialFindings />}
                </div>
            </div>
        </div>
    );
};

export default Home;
