/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {},
        nightwind: {
            colorScale: {
                50: 950, // default 900
            },
        },
    },
    plugins: [
        require("nightwind"),
        require('@tailwindcss/container-queries')
    ],
}

