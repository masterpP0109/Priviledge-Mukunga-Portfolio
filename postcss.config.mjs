const config = {
  plugins: ["@tailwindcss/postcss"],
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
        autoDisplay: { '0%': { opacity: '0', transform: 'translateY(-200px) scale(0)' }, '50%': { opacity: '1', filter: 'blur(0)', transform: 'translateY(0) scale(1)' } },
        autoBlur: { /* mimic your blur animation */ },
        fadeIn: { '0%': { opacity: '0', transform: 'translateX(-500px) scale(.2)' }, '50%': { opacity: '1', filter: 'blur(0)', transform: 'translateX(0)' } },
      },
    },
  },
  corePlugins: {
    mixBlendMode: true,
  },
};

export default config;
