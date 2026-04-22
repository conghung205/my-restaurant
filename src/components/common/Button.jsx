import React from "react";

const Button = ({ text, className = "" }) => {
    return (
        <button
            className={`px-5 py-2 transition-all duration-300 uppercase hover:opacity-90 cursor-pointer active:scale-95 ${className}`}
        >
            {text}
        </button>
    );
};

export default Button;
