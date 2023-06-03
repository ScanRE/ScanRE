import React from "react";

const ProgressBar = () => {
	return (
		<div className="border p-4 rounded-lg mt-4">
			<div className="flex items-center mb-2">
				<h2 className="text-lg font-semibold bg-blue-500 text-white py-1 px-2 rounded">
					% Fixed
				</h2>
			</div>
			<div className="relative w-20 h-20 mx-auto">
				<div
					className="radial-progress bg-primary text-primary-content border-4 border-primary"
					style={{ "--value": 70 }}
				>
					70%
				</div>
			</div>
		</div>
	);
};

export default ProgressBar;
