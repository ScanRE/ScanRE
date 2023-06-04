import React from "react";
import InfoTitle from "../InfoTitle";

const References = ({ title, references }) => {
	return (
		<div className="p-4 rounded-lg shadow border border-gray-400 mt-3">
			<InfoTitle title={title} />
			{references.map((link, index) => (
				<a
					key={index}
					href={link}
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-500 hover:underline"
				>
					{link}
				</a>
			))}
		</div>
	);
};

export default References;
