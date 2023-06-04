import React from "react";

const StatsSection = ({
	title,
	severity,
	owasp,
	type,
	date,
	cwe,
	impact,
	likelihood,
	age
}) => {
	const colorMap = new Map([
		["CRITICAL", "#FF7979"],
		["HIGH", "#FFB46A"],
		["MEDIUM", "#FFD479"],
		["LOW", "#A7E9AF"],
		["INFORMATIONAL", "#B1D6FF"]
	]);

	return (
		<div className="p-4 rounded-lg shadow border border-gray-400">
			<div className="text-xl font-bold border-b-2 border-gray-300 mb-3">
				{title}
			</div>
			<div className="flex flex-wrap align-center">
				<div className="w-1/2 flex gap-4 align-center items-center">
					<p className="text-gray-900">Severity : </p>
					<p
						className={`text-lg font-semibold px-1 rounded-lg bg-${[
							colorMap.get(severity)
						]}`}
					>
						{severity}
					</p>
				</div>
				<div className="w-1/2 flex gap-4 align-center items-center">
					<p className="text-gray-900">OWASP : </p>
					<p className="text-lg font-semibold">{owasp}</p>
				</div>
				<div className="w-1/2 flex gap-4 align-center items-center">
					<p className="text-gray-900">Type : </p>
					<p className="text-lg font-semibold">{type}</p>
				</div>
				<div className="w-1/2 flex gap-4 align-center items-center">
					<p className="text-gray-900">Date : </p>
					<p className="text-lg font-semibold">{"2023-06-04"}</p>
				</div>
				<div className="w-1/2 flex gap-4 align-center items-center">
					<p className="text-gray-900">CWE : </p>
					<p className="text-lg font-semibold">{cwe}</p>
				</div>
				<div className="w-1/2 flex gap-4 align-center items-center">
					<p className="text-gray-900">Impact : </p>
					<p
						className={`text-lg font-semibold px-1 rounded-lg bg-${[
							colorMap.get(impact)
						]}`}
					>
						{impact}
					</p>
				</div>
				<div className="w-1/2 flex gap-4 align-center items-center">
					<p className="text-gray-900">Likelihood : </p>
					<p
						className={`text-lg font-semibold px-1 rounded-lg bg-${[
							colorMap.get(likelihood)
						]}`}
					>
						{likelihood}
					</p>
				</div>
				<div className="w-1/2 flex gap-4 align-center items-center">
					<p className="text-gray-900">Age : </p>
					<p className="text-lg font-semibold">{age} days</p>
				</div>
			</div>
		</div>
	);
};

export default StatsSection;
