/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        noventra: {
          dark: '#070f0c',
          charcoal: '#0d1a16',
          forest: '#0a2920',
          emerald: '#0f3d30',
          leaf: '#186d4b',
          sage: '#4e8770',
          mint: '#34d399',
          gold: {
            DEFAULT: '#d4af37',
            light: '#f5e8be',
            dark: '#a68020',
            glow: '#f59e0b'
          },
          sand: {
            DEFAULT: '#faf8f2',
            50: '#fcfbf8',
            100: '#f5f2e8',
            200: '#ebe5d5',
            300: '#ddd2bc'
          },
          cream: '#f9f6ed',
          stone: '#738a80'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Cinzel"', 'serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'luxury-glow': 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.15) 0%, rgba(15, 61, 48, 0.05) 50%, transparent 100%)',
        'forest-glow': 'radial-gradient(circle at 50% 50%, rgba(24, 109, 75, 0.25) 0%, rgba(10, 41, 32, 0.95) 70%, #070f0c 100%)',
      },
      boxShadow: {
        'luxury': '0 20px 50px -10px rgba(7, 15, 12, 0.25), 0 0 30px rgba(212, 175, 55, 0.08)',
        'luxury-dark': '0 25px 60px -15px rgba(0, 0, 0, 0.5), 0 0 40px rgba(212, 175, 55, 0.12)',
        'halo': '0 0 60px 20px rgba(212, 175, 55, 0.25)',
        'halo-sm': '0 0 25px 5px rgba(212, 175, 55, 0.2)',
        'card': '0 10px 30px -5px rgba(0,0,0,0.06), 0 0 1px 1px rgba(0,0,0,0.04)'
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 0.4, transform: 'scale(1)' },
          '50%': { opacity: 0.8, transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
