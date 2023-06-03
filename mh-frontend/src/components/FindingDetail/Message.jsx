import React from "react";
import InfoTitle from "../InfoTitle";

const Message = () => {
    return (
        <div className="p-4 rounded-lg shadow border border-gray-400 mt-3">
            <InfoTitle title={"Message"} />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus dolor id mi maximus, ac lacinia
                ex fermentum. Vivamus sit amet dapibus enim, in maximus sem.
            </p>
        </div>
    );
};

export default Message;
