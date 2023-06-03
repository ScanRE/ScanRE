import React from "react";

import StatsSection from "../components/FindingDetail/StatsSection";
import FileLocation from "../components/FindingDetail/FileLocation";
import Message from "../components/FindingDetail/Message";
import CodeSnippet from "../components/FindingDetail/CodeSnippet";

const FindingDetail = () => {
    return (
        <div className="m-4 p-4">
            <div className="flex items-center mb-2">
                <h2 className="text-lg font-semibold bg-blue-500 text-white py-1 px-2 rounded">
                    Details of Finding : {}
                </h2>
            </div>
            <StatsSection />
            <FileLocation />
            <CodeSnippet title={"Vulnerable"} />
            <Message />
            <CodeSnippet title={"Mitigation"} />
        </div>
    );
};

export default FindingDetail;
