import React from "react";

const References = () => {
	const references = [
		{ name: "OWASP Top 10", link: "https://www.owasp.org/top10" },
		{
			name: "CWE-123",
			link: "https://cwe.mitre.org/data/definitions/123.html"
		}
		// Add more references as needed
	];

	return (
		<div className="bg-white p-4 rounded-lg shadow">
			<p className="text-gray-600">References:</p>
			{references.map((reference, index) => (
				<a
					key={index}
					href={reference.link}
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-500 hover:underline"
				>
					{reference.name}
				</a>
			))}
		</div>
	);
};

export default References;
