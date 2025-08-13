module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // for App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // for Pages Router
    "./components/**/*.{js,ts,jsx,tsx}", // custom components
  ],
  theme: {
    extend: {
      animation: {
        text: 'text 2.5s linear infinite',
        autoDisplay: 'autoDisplay 1s ease both',
        autoBlur: 'autoBlur 2s ease both',
        fadeInRight: 'fadeIn 1s ease both',
      },
      keyframes: {
        text: {
          '0%,100%': { backgroundSize: '200%', backgroundPosition: 'left center' },
          '50%': { backgroundPosition: 'right center' },
        },
        autoDisplay: {
          '0%': { opacity: '0', transform: 'translateY(-200px) scale(0)' },
          '50%': { opacity: '1', filter: 'blur(0)', transform: 'translateY(0) scale(1)' },
        },
        autoBlur: {
          '0%': { filter: 'blur(10px)', opacity: '0' },
          '100%': { filter: 'blur(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateX(-500px) scale(0.2)' },
          '50%': { opacity: '1', filter: 'blur(0)', transform: 'translateX(0)' },
        },
      },
    },
  },
  corePlugins: {
    mixBlendMode: true,
  },
  plugins: [],
};

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        text: 'text 2.5s linear infinite',
        autoDisplay: 'autoDisplay 1s ease both',
        autoBlur: 'autoBlur 2s ease both',
        fadeInRight: 'fadeIn 1s ease both',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        text: {
          '0%,100%': { backgroundSize: '200%', backgroundPosition: 'left center' },
          '50%': { backgroundPosition: 'right center' },
        },
        autoDisplay: {
          '0%': { opacity: '0', transform: 'translateY(-200px) scale(0)' },
          '50%': { opacity: '1', filter: 'blur(0)', transform: 'translateY(0) scale(1)' },
        },
        autoBlur: {
          '0%': { filter: 'blur(10px)', opacity: '0' },
          '100%': { filter: 'blur(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateX(-500px) scale(0.2)' },
          '50%': { opacity: '1', filter: 'blur(0)', transform: 'translateX(0)' },
        },
      },
    },
  },
 
  plugins: [],
};
export default config;
