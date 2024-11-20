/** @type {import('tailwindcss').Config} */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        light: {
          text: '#11181C',
          background: '#fff',
          tint: tintColorLight,
          icon: '#687076',
          tabIconDefault: '#687076',
          tabIconSelected: tintColorLight,
        },
        dark: {
          text: '#ECEDEE',
          background: '#151718',
          tint: tintColorDark,
          icon: '#9BA1A6',
          tabIconDefault: '#9BA1A6',
          tabIconSelected: tintColorDark,
        },
      },
    },
  },
  plugins: [],
};
