/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html",
  "./src/**/*.{js,jsx}",],
theme: {
  extend: { 
  fontFamily: {
    poppins: ['Poppins', 'sans-serif'],  
    },
  animation: {
      'spin-slow': 'spin 3s linear infinite',
      'spin-fast': 'spin 0.5s linear infinite',
  'bounce-slow': 'bounce 3s infinite',
      'bounce-fast': 'bounce 0.5s infinite',
  'pulse-slow': 'pulse 3s infinite',
      'pulse-fast': 'pulse 0.5s infinite',
  'fadeIn': 'fadeIn 3s ease-in-out infinite',
    },
  // Custom keyframes
    keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      },
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      slideIn: {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(0)' },
      },
  slideOut: {
    '0%': { transform: 'translateX(0)' },
    '100%': { transform: 'translateX(100%)' },
  },
  shake: {
    '0%, 100%': { transform: 'translateX(0)' },
    '25%': { transform: 'translateX(-1px)' },
    '75%': { transform: 'translateX(1px)' },
    },
    zoomIn: {
    '0%': { transform: 'scale(0)' },
    '100%': { transform: 'scale(1)' },
    },
    rotate: {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
    },
    },
    // Custom animations
    animation: {
      'wiggle': 'wiggle 1s ease-in-out infinite',
      'fadeIn': 'fadeIn 2s ease-in forwards',
      'slideIn': 'slideIn 1s ease-out forwards',
  'shake': 'shake 0.5s ease-in-out infinite',
      'zoomIn': 'zoomIn 0.8s ease-out forwards',
      'rotate': 'rotate 1s linear infinite',
  'slideOut': 'slideOut 1s ease-out forwards',
    },
    borderRadius: {
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)'
    },
    colors: {
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      card: {
        DEFAULT: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))'
      },
      popover: {
        DEFAULT: 'hsl(var(--popover))',
        foreground: 'hsl(var(--popover-foreground))'
      },
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))'
      },
      secondary: {
        DEFAULT: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--secondary-foreground))'
      },
      muted: {
        DEFAULT: 'hsl(var(--muted))',
        foreground: 'hsl(var(--muted-foreground))'
      },
      accent: {
        DEFAULT: 'hsl(var(--accent))',
        foreground: 'hsl(var(--accent-foreground))'
      },
      destructive: {
        DEFAULT: 'hsl(var(--destructive))',
        foreground: 'hsl(var(--destructive-foreground))'
      },
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',
      chart: {
        '1': 'hsl(var(--chart-1))',
        '2': 'hsl(var(--chart-2))',
        '3': 'hsl(var(--chart-3))',
        '4': 'hsl(var(--chart-4))',
        '5': 'hsl(var(--chart-5))'
      }
    }
  }
},
plugins: [require("tailwindcss-animate")],
}
