import React from "react";

import StatsSection from "../components/FindingDetail/StatsSection";
import FileLocation from "../components/FindingDetail/FileLocation";
import Message from "../components/FindingDetail/Message";
import CodeSnippet from "../components/FindingDetail/CodeSnippet";

import { Link } from "react-router-dom";
import leftIcon from "../assets/left.png";
import Info from "../components/Info";

const FindingDetail = () => {
    return (
        <div className="m-4 p-4 text-primary">
            <Link to={"/home"}>
                <span className="underline underline-offset-2">
                    <img src={leftIcon} className="inline" />
                    Back
                </span>
            </Link>
            <div className="flex items-center m-4 w-full">
                <h2 className="text-lg bg-primary text-white py-1 px-2 rounded">Details of Finding</h2>
                <Info title={"SQL Injection at password input on logIn Screen"} />
            </div>

            {/* severity, status, type, date, cwe, impact, likelihood, age} */}
            <StatsSection title={"Finding Stats"}/>
            <FileLocation />
            <CodeSnippet title={"Vulnerable"} />
            <Message />
            <CodeSnippet title={"Mitigation"} />
        </div>
    );
};

export default FindingDetail;
