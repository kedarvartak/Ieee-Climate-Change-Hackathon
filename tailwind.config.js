// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the paths according to your project structure
  ],
  theme: {
    extend: {
      keyframes: {
        scrollLeftToRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        scrollRightToLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scrollLeftToRight: 'scrollLeftToRight 20s linear infinite',
        scrollRightToLeft: 'scrollRightToLeft 20s linear infinite',
      },

      backdropBlur: {
        'none': '0',
        'sm': '4px',
        'DEFAULT': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '40px',
      },
      // Define your custom fonts
      fontFamily: {
        caramel: ['"Caramel"', 'cursive'],
        orbitron: ['"Orbitron"', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      backdropBlur: ['responsive'],
      // Add other variants if needed
    },
  },
  plugins: [
    // Removed @tailwindcss/forms plugin as per your request
    // Add other plugins if needed
  ],
};
