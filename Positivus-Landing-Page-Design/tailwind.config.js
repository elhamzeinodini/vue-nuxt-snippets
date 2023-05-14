/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        screens: {
            'sm': {'min': '375px', 'max': '599px'},
            'md': {'min': '768px', 'max': '1281px'},
            'lg': {'min': '1282px'},
        }
    },
    plugins: [],
}