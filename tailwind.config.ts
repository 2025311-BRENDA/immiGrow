import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    aqua: "#2A9D8F",
                    beige: "#E5D3B3",
                    pink: "#FFC4D6",
                    navy: "#1E293B",
                    sand: "#FAF9F6",
                    teal: "#2A9D8F",
                    coral: "#E76F51",
                    sun: "#E9C46A",
                    sage: "#8AB17D",
                    purple: "#6D597A",
                    sunset: "#E76F51", // Keeping as alias for now but using in UI
                    "irish-green": "#009B48",
                    turquoise: "#2EBCC9",
                    "deep-emerald": "#047857",
                },
            },
            fontFamily: {
                heading: ["var(--font-outfit)", "sans-serif"],
                sans: ["var(--font-inter)", "sans-serif"],
            },
            animation: {
                "fade-in": "fadeIn 0.5s ease-out",
                "slide-up": "slideUp 0.5s ease-out",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { transform: "translateY(20px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
