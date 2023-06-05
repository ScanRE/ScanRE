import { useState } from "react";
import Switch from "react-switch";

function Checkbox() {
	const [isChecked, setIsChecked] = useState(false);

	const handleToggleChange = () => {
		setIsChecked(!isChecked);
	};

	return (
		<div className="flex items-center space-x-2 justify-end">
			<Switch
				id="deepScanToggle"
				checked={isChecked}
				onChange={handleToggleChange}
				onColor="#111"
				offColor="#666"
				handleDiameter={18}
				uncheckedIcon={false}
				checkedIcon={false}
			/>
			<label htmlFor="deepScanToggle" className="text-lg text-gray-800">
				Deep Scan
			</label>
		</div>
	);
}

export default Checkbox;
