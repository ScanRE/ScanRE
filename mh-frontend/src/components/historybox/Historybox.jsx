import React from "react";
import CTA from "../cta/CTA";
import "./historybox.css";
import { useNavigate } from "react-router-dom";

function Historybox({ url, lastScanned }) {
	let navigate = useNavigate();

	const handleSubmit = async () => {
		navigate("/home");
	};

	// const regex = /\/([A-Za-z0-9_-]+\/[A-Za-z0-9_-]+)$/;
	// const result = url.match(regex)[1];
	// console.log(result);

	const formatName = (url) => {
		return url.split(".")[0];
	};

	return (
		<div className={`price-box glowing-border`}>
			<div className="one">
				<span className="heading">{formatName(url)}</span>
				<span className="desc">
					Last Scanned {lastScanned} days ago.
				</span>
			</div>
			<div className="two">
				<CTA onClick={handleSubmit} text={url} />
			</div>
		</div>
	);
}

export default Historybox;
