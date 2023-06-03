import React from "react";

const FileLocation = () => {
    return (
        <div className="p-4 rounded-lg shadow border border-white my-3">
            <p className="text-gray-600">File Location:</p>
            <p className="text-lg font-semibold">/path/to/file</p>
            <p className="text-gray-600">Line Number:</p>
            <p className="text-lg font-semibold">123</p>
        </div>
    );
};

export default FileLocation;
