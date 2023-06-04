import { useState } from "react";

function Checkbox() {
	const [isChecked, setIsChecked] = useState(false);

	const handleCheckboxChange = (e) => {
		setIsChecked(e.target.checked);
	};

	return (
		<div className="flex items-center space-x-2 justify-items-end justify-end">
			<input
				type="checkbox"
				id="deepScanCheckbox"
				checked={isChecked}
				onChange={handleCheckboxChange}
				className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
			/>
			<label htmlFor="deepScanCheckbox" className="text-xl text-gray-700">
				Deep Scan
			</label>
		</div>
	);
}

export default Checkbox;
