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
            'md': {'min': '600px', 'max': '1280px'},
            'lg': {'min': '1281px'},
        }
    },
    plugins: [],
}