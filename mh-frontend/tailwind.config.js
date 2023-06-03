/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [daisyui],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#1C1C1C",
                    secondary: "#f6d860",
                },
            },
        ],
    },
};
