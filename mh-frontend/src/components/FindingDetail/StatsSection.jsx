import React from "react";

const StatsSection = () => {
    return (
        <div className="p-4 rounded-lg shadow border border-white">
            <div className="flex flex-wrap">
                <div className="w-1/2">
                    <p className="text-gray-600">Severity:</p>
                    <p className="text-lg font-semibold">High</p>
                </div>
                <div className="w-1/2">
                    <p className="text-gray-600">Status:</p>
                    <p className="text-lg font-semibold">Open</p>
                </div>
                <div className="w-1/2">
                    <p className="text-gray-600">Type:</p>
                    <p className="text-lg font-semibold">Vulnerability</p>
                </div>
                <div className="w-1/2">
                    <p className="text-gray-600">Date:</p>
                    <p className="text-lg font-semibold">2023-06-03</p>
                </div>
                <div className="w-1/2">
                    <p className="text-gray-600">CWE:</p>
                    <p className="text-lg font-semibold">CWE-123</p>
                </div>
                <div className="w-1/2">
                    <p className="text-gray-600">Impact:</p>
                    <p className="text-lg font-semibold">High</p>
                </div>
                <div className="w-1/2">
                    <p className="text-gray-600">Likelihood:</p>
                    <p className="text-lg font-semibold">Medium</p>
                </div>
                <div className="w-1/2">
                    <p className="text-gray-600">Age:</p>
                    <p className="text-lg font-semibold">3 days</p>
                </div>
            </div>
        </div>
    );
};

export default StatsSection;
