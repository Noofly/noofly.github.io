/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'wide': '1675px',
      },
      colors: {
        // Primary Colors
        'primary': '#1a365d', // Deep navy (primary) - blue-900
        'primary-50': '#ebf4ff', // Light navy (50-level shade) - blue-50
        'primary-100': '#dbeafe', // Light navy (100-level shade) - blue-100
        'primary-200': '#bfdbfe', // Light navy (200-level shade) - blue-200
        'primary-500': '#3b82f6', // Medium navy (500-level shade) - blue-500
        'primary-600': '#2563eb', // Medium navy (600-level shade) - blue-600
        'primary-700': '#1d4ed8', // Dark navy (700-level shade) - blue-700
        'primary-800': '#1e40af', // Dark navy (800-level shade) - blue-800
        'primary-900': '#1e3a8a', // Darkest navy (900-level shade) - blue-900

        // Secondary Colors
        'secondary': '#2d3748', // Charcoal (secondary) - gray-700
        'secondary-50': '#f9fafb', // Light charcoal (50-level shade) - gray-50
        'secondary-100': '#f3f4f6', // Light charcoal (100-level shade) - gray-100
        'secondary-200': '#e5e7eb', // Light charcoal (200-level shade) - gray-200
        'secondary-500': '#6b7280', // Medium charcoal (500-level shade) - gray-500
        'secondary-600': '#4b5563', // Medium charcoal (600-level shade) - gray-600
        'secondary-700': '#374151', // Dark charcoal (700-level shade) - gray-700
        'secondary-800': '#1f2937', // Dark charcoal (800-level shade) - gray-800
        'secondary-900': '#111827', // Darkest charcoal (900-level shade) - gray-900

        // Accent Colors
        'accent': '#3182ce', // Electric blue (accent) - blue-600
        'accent-50': '#eff6ff', // Light electric blue (50-level shade) - blue-50
        'accent-100': '#dbeafe', // Light electric blue (100-level shade) - blue-100
        'accent-200': '#bfdbfe', // Light electric blue (200-level shade) - blue-200
        'accent-500': '#3b82f6', // Medium electric blue (500-level shade) - blue-500
        'accent-600': '#2563eb', // Medium electric blue (600-level shade) - blue-600
        'accent-700': '#1d4ed8', // Dark electric blue (700-level shade) - blue-700
        'accent-800': '#1e40af', // Dark electric blue (800-level shade) - blue-800
        'accent-900': '#1e3a8a', // Darkest electric blue (900-level shade) - blue-900

        // Background Colors
        'background': '#ffffff', // Pure white (background) - white
        'surface': '#f7fafc', // Subtle gray (surface) - gray-50

        // Text Colors
        'text-primary': '#1a202c', // Near-black (text primary) - gray-900
        'text-secondary': '#4a5568', // Medium gray (text secondary) - gray-600

        // Status Colors
        'success': '#38a169', // Forest green (success) - green-600
        'success-50': '#f0fff4', // Light forest green (50-level shade) - green-50
        'success-100': '#c6f6d5', // Light forest green (100-level shade) - green-100
        'success-500': '#48bb78', // Medium forest green (500-level shade) - green-500
        'success-600': '#38a169', // Medium forest green (600-level shade) - green-600
        'success-700': '#2f855a', // Dark forest green (700-level shade) - green-700

        'warning': '#d69e2e', // Amber (warning) - yellow-600
        'warning-50': '#fffbeb', // Light amber (50-level shade) - yellow-50
        'warning-100': '#fef3c7', // Light amber (100-level shade) - yellow-100
        'warning-500': '#f59e0b', // Medium amber (500-level shade) - yellow-500
        'warning-600': '#d97706', // Medium amber (600-level shade) - yellow-600
        'warning-700': '#b45309', // Dark amber (700-level shade) - yellow-700

        'error': '#e53e3e', // Warm red (error) - red-600
        'error-50': '#fef2f2', // Light warm red (50-level shade) - red-50
        'error-100': '#fee2e2', // Light warm red (100-level shade) - red-100
        'error-500': '#ef4444', // Medium warm red (500-level shade) - red-500
        'error-600': '#dc2626', // Medium warm red (600-level shade) - red-600
        'error-700': '#b91c1c', // Dark warm red (700-level shade) - red-700

        // CTA Color
        'cta': '#ed8936', // Warm orange (CTA) - orange-500
        'cta-50': '#fffaf0', // Light warm orange (50-level shade) - orange-50
        'cta-100': '#feebc8', // Light warm orange (100-level shade) - orange-100
        'cta-500': '#ed8936', // Medium warm orange (500-level shade) - orange-500
        'cta-600': '#dd6b20', // Medium warm orange (600-level shade) - orange-600
        'cta-700': '#c05621', // Dark warm orange (700-level shade) - orange-700
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'mono': ['Fira Code', 'Monaco', 'Cascadia Code', 'Roboto Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'subtle': '0 4px 6px -1px rgba(26, 54, 93, 0.07), 0 2px 4px -1px rgba(26, 54, 93, 0.06)',
        'elevated': '0 10px 15px -3px rgba(26, 54, 93, 0.15), 0 4px 6px -2px rgba(26, 54, 93, 0.05)',
        'modal': '0 25px 50px -12px rgba(26, 54, 93, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 600ms ease-out',
        'slide-up': 'slideUp 600ms ease-out',
        'scale-in': 'scaleIn 400ms ease-out',
        'pulse-subtle': 'pulse-subtle 4s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'pulse-subtle': {
          '0%': {
            boxShadow: '0 0 0 0 rgba(237, 137, 54, 0.4)'
          },
          '25%': {
            boxShadow: '0 0 0 12px rgba(237, 137, 54, 0)'
          },
          '100%': {
            boxShadow: '0 0 0 12px rgba(237, 137, 54, 0)'
          }
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      scale: {
        '102': '1.02',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}