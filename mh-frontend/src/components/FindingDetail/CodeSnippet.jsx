import React, {useEffect} from "react";
import InfoTitle from "../InfoTitle";
import Info from "../Info";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeSnippet = ({ title, code, lang }) => {

    useEffect(() => {
      console.log(lang)
    }, [])
    

    return (
        <div className="p-4 rounded-lg shadow border border-gray-400 mt-3">
            <InfoTitle title={title} />
            <div className="rounded-lg shadow">
                <SyntaxHighlighter language={lang} style={tomorrow} className="rounded-lg mt-2">
                    {code == "" ? "ChatGPT needs additional information to suggest mitigations" : code}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

export default CodeSnippet;
