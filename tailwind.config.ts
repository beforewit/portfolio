import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme")


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      8: ["8px", "10px"],
      9: ["9px", "12px"],
      10: ["10px", "14px"],
      11: ["11px", "16px"],
      12: ["12px", "18px"],
      13: ["13px", "20px"],
      14: ["14px", "22px"],
      16: ["16px", "22px"],
      18: ["18px", "24px"],
      20: ["20px", "24px"],
      22: ["22px", "28px"],
      24: ["22px", "30px"],
      26: ["26px", "32px"],
      28: ["28px", "34px"],
      32: ["32px", "38.4px"],
      36: ["36px", "43.2px"],
      40: ["40px", "56px"],
      48: ["48px", "56px"],
    },
    extend: {
      fontFamily: {
        sans: ["Sora", ...defaultTheme.fontFamily.sans],
        serif: ["Sora", ...defaultTheme.fontFamily.serif],
        mono: ["Sora", ...defaultTheme.fontFamily.mono],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'black_bg': '#121316',
        'violet_bg': '#D0CFF4',
        'gray_bg': '#F1F1F1',
        'White900': '#FCFCFC',
        'tangerine': '#FF2E00',
        'tangerine_light' : '#FF532D',
        'gray_desc': '#605553',
        'gray_border': '#71717A',
        'gray_desc2': '#D4D4D8',
      },
    },
  },
  plugins: [],
};
export default config;
