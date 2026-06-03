/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          tertiary: 'var(--bg-tertiary)',
          inverse: 'var(--bg-inverse)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
          disabled: 'var(--text-disabled)',
          inverse: 'var(--text-inverse)',
        },
        border: {
          default: 'var(--border-default)',
          strong: 'var(--border-strong)',
          inverse: 'var(--border-inverse)',
        },
        overlay: {
          subtle: 'var(--overlay-subtle)',
          medium: 'var(--overlay-medium)',
          strong: 'var(--overlay-strong)',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '12': '48px',
        '16': '64px',
      },
      boxShadow: {
        'l0': 'none',
        'l1': '0px 1px 3px rgba(0,0,0,0.06)',
        'l2': '0px 0px 0px 1px rgba(0,0,0,0.06), 0px 4px 10px rgba(0,0,0,0.08)',
        'l3': '0px 8px 24px rgba(0,0,0,0.12)',
      },
      borderRadius: {
        'pill': '9999px',
        'large': '12px',
        'default': '8px',
        'small': '6px',
        'tiny': '4px',
        'none': '0px',
      }
    },
  },
  plugins: [],
};
