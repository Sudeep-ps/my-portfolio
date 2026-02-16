import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                accent: "#3B82F6",
                "accent-light": "#60A5FA",
                "accent-dark": "#1D4ED8",
                "bg-card": "#0D1526",
                border: "#1E2D45",
            },
            fontFamily: {
                sans: ["var(--font-syne)", "sans-serif"],
                mono: ["var(--font-mono)", "monospace"],
            },
            animation: {
                float: "float 4s ease-in-out infinite",
                "pulse-glow": "pulse-glow 2s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};

export default config;