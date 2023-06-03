import React, { useState } from "react";
import editSVG from "../assets/edit.svg"

const Description = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [content, setContent] = useState(
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, illum, minus elit. Sapiente, illum, minus?"
    );

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
    };

    const handleChange = (event) => {
        setContent(event.target.value);
    };

    return (
        <div className="relative p-4 border rounded-lg shadow mb-5 shadow-sm border-gray-500">
            <div className="flex items-center mb-2">
                <h2 className="text-lg font-semibold bg-primary text-white py-1 px-2 rounded">Description</h2>
            </div>
            {isEditing ? (
                <textarea
                    className="w-full h-32 border rounded p-2 text-black"
                    style={{ color: "#000" }}
                    value={content}
                    onChange={handleChange}
                />
            ) : (
                <p className="whitespace-pre-line text-gray-900">{content}</p>
            )}
            {isEditing ? (
                <div className="absolute bottom-2 right-2">
                    <button
                        className="px-4 py-2 text-sm text-white bg-green-500 rounded shadow"
                        onClick={handleSaveClick}
                    >
                        Save
                    </button>
                </div>
            ) : (
                <div className="absolute bottom-2 right-2">
                    <button
                        className="px-2 py-1 text-sm text-white bg-gray-500 rounded shadow"
                        onClick={handleEditClick}
                    >
                        <img src={editSVG} alt="edit" className="w-[70%] inline"/>
                    </button>
                </div>
            )}
        </div>
    );
};

export default Description;
