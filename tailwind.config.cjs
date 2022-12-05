function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'media',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  theme: {
    extend: {
      textColor: {
        skin: {
          base: withOpacity('--color-text-base'),

        },
      },
      backgroundColor: {
        skin: {
          fill: withOpacity('--color-bg-base'),

        },
      },
    },
  },
  plugins: [],
}
