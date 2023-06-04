import React, { useEffect, useState } from "react";
import Description from "../components/Description";
import DoughnutChart from "../components/DoughnutChart";
import ProgressBar from "../components/ProgressBar";

const Overview = ({ scanResData }) => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		let cnt = 0,
			total = 0;
		scanResData.results.forEach((result) => {
			total++;
			if (result.checked) cnt++;
		});
		setProgress(((cnt / total) * 100).toFixed(2));
	}, []);

	return (
		<div className="m-4 p-4">
			<Description />
			<div className="flex justify-evenly">
				<DoughnutChart scanResData={scanResData} />
				<ProgressBar progress={progress} />
			</div>
		</div>
	);
};

export default Overview;
