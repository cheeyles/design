/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {

      /* ── AuctionsPlus brand colours ─────────────────────────── */
      colors: {

        /* Navy — brand-dark (bg-brand-dark, text-brand-dark, bg-brand-dark-700 …) */
        'brand-dark': {
          DEFAULT: '#002341',   /* = --primitive-brand-dark-900  */
          50:      '#E4E8ED',   /* = --primitive-brand-dark-50   */
          700:     '#013C65',   /* = --primitive-brand-dark-700  */
          900:     '#002341',   /* = --primitive-brand-dark-900  */
        },

        /* Blue — brand-primary */
        'brand-primary': {
          DEFAULT: '#1971D8',   /* = --primitive-brand-primary-700 */
          50:      '#E3F2FE',   /* = --primitive-brand-primary-50  */
          700:     '#1971D8',   /* = --primitive-brand-primary-700 */
          800:     '#1542A7',   /* = --primitive-brand-primary-900 */
          900:     '#1542A7',   /* = --primitive-brand-primary-900 */
        },

        /* Green — positive */
        'positive': {
          DEFAULT: '#00873D',   /* = --primitive-positive-800 */
          50:      '#E7F7EB',   /* = --primitive-positive-50  */
          900:     '#006728',   /* = --primitive-positive-900 */
        },

        /* Red — negative */
        'negative': {
          DEFAULT: '#CD002B',   /* = --primitive-negative-900 */
          50:      '#FFECF1',   /* = --primitive-negative-50  */
        },

        /* Orange — warning */
        'warning': {
          DEFAULT: '#D96725',   /* = --primitive-warning-900 */
          50:      '#FDF4E3',   /* = --primitive-warning-50  */
        },

        /* Yellow */
        'yellow': {
          DEFAULT: '#FFB700',   /* = --primitive-yellow-600 */
          50:      '#FFF9E1',   /* = --primitive-yellow-50  */
        },

        /* Teal */
        'teal': {
          DEFAULT: '#005147',   /* = --primitive-teal-800 */
          50:      '#DDEEED',   /* = --primitive-teal-50  */
        },

        /* Pink */
        'pink': {
          DEFAULT: '#760046',   /* = --primitive-pink-800 */
          50:      '#F3E0EA',   /* = --primitive-pink-50  */
        },

        /* Purple */
        'purple': {
          DEFAULT: '#6A1B9A',   /* = --primitive-purple-800 */
          50:      '#F3E5F5',   /* = --primitive-purple-50  */
        },

        /* Override Tailwind's default gray with AuctionsPlus brand grays.
           Only values present in primitives.css are listed here. */
        'gray': {
          50:  '#F7FAFC',
          100: '#F4F4F4',       /* = --primitive-gray-100 */
          300: '#DBDEE0',       /* = --primitive-gray-300 */
          400: '#B7BABC',       /* = --primitive-gray-400 */
          700: '#5C5E60',       /* = --primitive-gray-700 */
          800: '#3D4041',       /* = --primitive-gray-800 */
        },
      },

      /* ── Custom font families ──────────────────────────────── */
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },

      /* ── Custom widths ─────────────────────────────────────── */
      width: {
        '260px': '260px',
      },

      /* ── AuctionsPlus typography scale ─────────────────────── */
      /* Clean names match the Figma type scale exactly.
         Legacy aliases kept for backward compat with existing components. */
      fontSize: {
        /* — Clean Figma names — */
        'label-sm':    ['10px', { lineHeight: '16px' }],
        'label-md':    ['12px', { lineHeight: '18px' }],
        'body-sm':     ['14px', { lineHeight: '22px' }],
        'body-md':     ['16px', { lineHeight: '24px' }],
        'title-md':    ['18px', { lineHeight: '28px' }],
        'title-lg':    ['20px', { lineHeight: '30px' }],
        'headline-sm': ['24px', { lineHeight: '36px' }],
        'headline-md': ['28px', { lineHeight: '42px' }],
        'headline-lg': ['32px', { lineHeight: '48px' }],
        'display-sm':  ['36px', { lineHeight: '54px' }],
        'display-md':  ['45px', { lineHeight: '68px' }],
        'display-lg':  ['57px', { lineHeight: '86px' }],
        /* — Legacy aliases (used in existing components) — */
        'label-lg':     ['12px', { lineHeight: '18px' }],  /* = label-md   */
        'label-medium': ['12px', { lineHeight: '18px' }],  /* = label-md   */
        'body-lg':      ['16px', { lineHeight: '24px' }],  /* = body-md    */
        'body-medium':  ['16px', { lineHeight: '24px' }],  /* = body-md    */
        'title-sm':     ['18px', { lineHeight: '28px' }],  /* = title-md   */
        'title-medium': ['18px', { lineHeight: '28px' }],  /* = title-md   */
        'heading':      ['24px', { lineHeight: '36px' }],  /* = headline-sm */
      },

      /* ── Custom font weights ───────────────────────────────── */
      fontWeight: {
        'regular': '400',
      },

    },
  },
  plugins: [],
}
