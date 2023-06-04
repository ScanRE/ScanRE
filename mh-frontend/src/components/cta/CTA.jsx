import React from "react";
import "./cta.css";

function CTA({ text, onClick=(() => {}), type=""}) {
	return (
		<button className={`btn btn-${type}`} onClick={onClick}>
			{text}
		</button>
	);
}

export default CTA;
