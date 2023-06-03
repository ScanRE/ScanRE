import React, { useState } from "react";

const Description = () => {
	const [isEditing, setIsEditing] = useState(false);
	const [content, setContent] = useState(
		"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, illum, minus elit. Sapiente, illum, minus?"
	);

	const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleSaveClick = () => {
		setIsEditing(false);
	};

	const handleChange = (event) => {
		setContent(event.target.value);
	};

	return (
		<div className="relative p-4 border rounded-lg shadow mb-5">
			<div className="flex items-center mb-2">
				<h2 className="text-lg font-semibold bg-blue-500 text-white py-1 px-2 rounded">
					Description
				</h2>
			</div>
			{isEditing ? (
				<textarea
					className="w-full h-32 border rounded p-2"
					value={content}
					onChange={handleChange}
				/>
			) : (
				<p className="whitespace-pre-line">{content}</p>
			)}
			{isEditing ? (
				<div className="absolute bottom-2 right-2">
					<button
						className="px-4 py-2 text-sm text-white bg-green-500 rounded shadow"
						onClick={handleSaveClick}
					>
						Save
					</button>
				</div>
			) : (
				<div className="absolute bottom-2 right-2">
					<button
						className="px-2 py-1 text-sm text-white bg-gray-500 rounded shadow"
						onClick={handleEditClick}
					>
						Edit
					</button>
				</div>
			)}
		</div>
	);
};

export default Description;
