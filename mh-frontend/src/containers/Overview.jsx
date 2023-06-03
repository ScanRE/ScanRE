import React from "react";
import Description from "../components/Description";
import DoughnutChart from "../components/DoughnutChart";
import ProgressBar from "../components/ProgressBar";

const Overview = () => {
	return (
		<div className="m-4 p-4">
			<Description />
			<div className="flex justify-evenly	">
				<DoughnutChart />
				<ProgressBar />
			</div>
		</div>
	);
};

export default Overview;
