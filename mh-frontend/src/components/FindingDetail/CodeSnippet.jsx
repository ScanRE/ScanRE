import React from "react";

const CodeSnippet = ({ title }) => {
	let code = `<div className="border border-white rounded-lg my-3 p-2">
          <div className="text-xl font-bold">{title}</div>
          <div className="rounded-lg shadow">
              <p className="text-gray-600">Code Snippet</p>
              <div className="font-mono text-sm bg-gray-500 p-2 rounded-lg mt-2">
                  <div>{code}</div>
              </div>
          </div>
      </div>`;

	return (
		<div className="border border-white rounded-lg my-3 p-2">
			<div className="text-xl font-bold">{title}</div>
			<div className="rounded-lg shadow">
				<p className="text-gray-600">Code Snippet</p>
				<div className="font-mono text-sm bg-gray-500 p-2 rounded-lg mt-2">
					<div>{code}</div>
				</div>
			</div>
		</div>
	);
};

export default CodeSnippet;
