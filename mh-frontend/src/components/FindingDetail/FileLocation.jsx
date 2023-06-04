import React from "react";
import Info from "../Info";
import InfoTitle from "../InfoTitle";

const FileLocation = ({fileLocation, lineCol}) => {
    return (
        <>
            <div className="p-4 rounded-lg shadow border border-gray-400 mt-3">
            <InfoTitle title={"File Location"} />
                <div className="flex items-center justify-around mt-3">
                    <div>
                        <p className="text-gray-900 inline">File Location:</p>
                        <Info title={fileLocation}/>
                    </div>
                    <div>
                        <p className="text-gray-900 inline">Line & Col:</p>
                        <Info title={lineCol} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default FileLocation;
