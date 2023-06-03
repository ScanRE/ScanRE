import React from "react";
import "./cta.css";

function CTA({ text, onClick }) {
	return (
		<button className="btn" onClick={onClick}>
			{text}
		</button>
	);
}

export default CTA;
