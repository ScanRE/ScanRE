import React from "react";

const StatsSection = ({title, severity, status, type, date, cwe, impact, likelihood, age}) => {
    return (
        <div className="p-4 rounded-lg shadow border border-gray-400">
            <div className="text-xl font-bold border-b-2 border-gray-300 mb-3">{title}</div>
            <div className="flex flex-wrap align-center">
                <div className="w-1/2 flex gap-4 align-center items-center">
                    <p className="text-gray-900">Severity : </p>
                    <p className="text-lg font-semibold bg-red-500 px-1 rounded-lg">High</p>
                </div>
                <div className="w-1/2 flex gap-4 align-center items-center">
                    <p className="text-gray-900">Status : </p>
                    <p className="text-lg font-semibold">Open</p>
                </div>
                <div className="w-1/2 flex gap-4 align-center items-center">
                    <p className="text-gray-900">Type : </p>
                    <p className="text-lg font-semibold">Vulnerability</p>
                </div>
                <div className="w-1/2 flex gap-4 align-center items-center">
                    <p className="text-gray-900">Date : </p>
                    <p className="text-lg font-semibold">2023-06-03</p>
                </div>
                <div className="w-1/2 flex gap-4 align-center items-center">
                    <p className="text-gray-900">CWE : </p>
                    <p className="text-lg font-semibold">CWE-123</p>
                </div>
                <div className="w-1/2 flex gap-4 align-center items-center">
                    <p className="text-gray-900">Impact : </p>
                    <p className="text-lg font-semibold bg-red-500  px-1 rounded-lg">High</p>
                </div>
                <div className="w-1/2 flex gap-4 align-center items-center">
                    <p className="text-gray-900">Likelihood : </p>
                    <p className="text-lg font-semibold bg-yellow-500  px-1 rounded-lg">Medium</p>
                </div>
                <div className="w-1/2 flex gap-4 align-center items-center">
                    <p className="text-gray-900">Age:</p>
                    <p className="text-lg font-semibold">3 days</p>
                </div>
            </div>
        </div>
    );
};

export default StatsSection;
