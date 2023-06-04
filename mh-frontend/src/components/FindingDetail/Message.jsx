import React from "react";
import InfoTitle from "../InfoTitle";

const Message = ({ message }) => {
	return (
		<div className="p-4 rounded-lg shadow border border-gray-400 mt-3">
			<InfoTitle title={"Message"} />
			<p>{message}</p>
		</div>
	);
};

export default Message;
