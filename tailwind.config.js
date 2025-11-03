/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        ocean: {
          50: '#e6f0f7',
          100: '#c3d9e8',
          200: '#9dc0d8',
          300: '#3682A8',
          400: '#135B93',
          500: '#093876',
          600: '#072e5f',
          700: '#052347',
          800: '#031447',
          900: '#020d2f',
        },
        accent: {
          light: '#C3C4B4',
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
      },
      fontFamily: {
        sans: ['var(--font-open-sans)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        avenir: ['Avenir', 'Avenir Next', 'Montserrat', 'system-ui', 'sans-serif'],
        cursive: ['var(--font-rock-salt)', 'cursive'],
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        merriweather: ['var(--font-merriweather)', 'Georgia', 'serif'],
        'pt-serif': ['var(--font-pt-serif)', 'Georgia', 'serif'],
        'source-serif-4': ['var(--font-source-serif-4)', 'Georgia', 'serif'],
        'libre-baskerville': ['var(--font-libre-baskerville)', 'Georgia', 'serif'],
        'liu-jian-mao-cao': ['var(--font-liu-jian-mao-cao)', 'cursive'],
        'zhi-ming-xing': ['Zhi Mang Xing', 'cursive', 'serif'],
        'noto-sans-sc': ['var(--font-noto-sans-sc)', 'sans-serif'],
        'noto-serif-sc': ['var(--font-noto-serif-sc)', 'serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
