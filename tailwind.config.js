/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom dark theme colors
        dark: {
          900: '#0a0a0a',    // Deepest black
          800: '#111111',    // Charcoal black
          700: '#1a1a1a',    // Slightly lighter charcoal
          600: '#222222',    // Card backgrounds
          500: '#2a2a2a',    // Borders
          400: '#333333',    // Hover states
        },
        accent: {
          primary: '#6366f1',    // Indigo
          secondary: '#8b5cf6',  // Violet
          glow: '#a78bfa',       // Soft purple glow
        },
        text: {
          primary: '#f8fafc',    // White
          secondary: '#94a3b8',  // Muted gray
          muted: '#64748b',      // Darker gray
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
