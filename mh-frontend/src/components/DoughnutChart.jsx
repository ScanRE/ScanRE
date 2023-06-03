import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
	labels: ["Critical", "High", "Medium", "Low", "Informational"],
	datasets: [
		{
			data: [300, 50, 100, 20, 40],
			backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#333", "#999"],
			hoverBackgroundColor: [
				"#FF6384",
				"#36A2EB",
				"#FFCE56",
				"#333",
				"#999"
			]
		}
	]
};

const options = {
	responsive: true
};

const DoughnutChart = () => {
	return (
		<div className="border rounded-lg p-4">
			<div className="flex items-center mb-2">
				<h2 className="text-lg font-semibold bg-blue-500 text-white py-1 px-2 rounded">
					Risk chart
				</h2>
			</div>
			<div className="w-48 h-48 mx-auto">
				<Doughnut data={data} options={options} />
			</div>
		</div>
	);
};

export default DoughnutChart;
