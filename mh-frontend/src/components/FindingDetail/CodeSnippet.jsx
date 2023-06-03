import React from "react";
import InfoTitle from "../InfoTitle";
import Info from "../Info";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeSnippet = ({ title }) => {
    let code = 
    `<div className="border border-white rounded-lg my-3 p-2">
          <div className="text-xl font-bold">{title}</div>
          <div className="rounded-lg shadow">
              <p className="text-gray-600">Code Snippet</p>
              <div className="font-mono text-sm bg-gray-500 p-2 rounded-lg mt-2">
                  <div>{code}</div>
              </div>
          </div>
    </div>`;

    return (
        <div className="p-4 rounded-lg shadow border border-gray-400 mt-3">
            <InfoTitle title={title} />
            <div className="rounded-lg shadow">
                <SyntaxHighlighter language="jsx" style={tomorrow} className="rounded-lg mt-2">
                    {code}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

export default CodeSnippet;
