import React from "react";

const ProgressBar = ({ progress }) => {
    return (
        <div className="border border-gray-500 p-4 rounded-lg w-full shadow-xl">
            <div className="flex items-center mb-2">
                <h2 className="text-lg font-semibold bg-primary text-white py-1 px-6 rounded">% Fixed</h2>
            </div>
            <div className="text-center my-4 text-primary text-xl">Vulnerabilites Fixed</div>
            <div className="text-center my-auto">
                <div
                    className="radial-progress bg-primary text-primary-content border-4 border-primary"
                    style={{ "--value": `${progress}`, "--size": "12rem", "--thickness": "4px" }}
                >
                    {progress}
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
