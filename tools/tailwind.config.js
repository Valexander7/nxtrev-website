// Tailwind build config. Mirrors the theme that used to live inline in each page.
// Rebuild after changing any classes: ./tools/build-css.sh
module.exports = {
  content: ['./*.html', './about-us/**/*.html', './products/**/*.html', './accotest/**/*.html', './assets/js/*.js', './_includes/*.html'],
  theme: {
    extend: {
      fontSize: {
        '2xs': ['0.75rem', { lineHeight: '1rem' }],       /* 12px for rare badges */
        xs: ['0.875rem', { lineHeight: '1.25rem' }],      /* 14px default for small/meta text */
        sm: ['1rem', { lineHeight: '1.5rem' }],           /* 16px default for body copy & cards */
        base: ['1.0625rem', { lineHeight: '1.65rem' }],   /* 17px default for section lead copy */
        lg: ['1.1875rem', { lineHeight: '1.75rem' }],     /* 19px */
        xl: ['1.375rem', { lineHeight: '1.85rem' }],      /* 22px */
        /* Heading scale (DESIGN.md, Craft Layer). Mobile step first, desktop step second. */
        h3: ['1.5rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],          /* 24px */
        'h2-sm': ['1.875rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],   /* 30px */
        h2: ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],           /* 40px */
        'display-sm': ['2.5rem', { lineHeight: '1.08', letterSpacing: '-0.025em' }], /* 40px */
        display: ['4rem', { lineHeight: '1.04', letterSpacing: '-0.03em' }]        /* 64px */
      },
      colors: {
        nxtrev: {
          DEFAULT: '#3058a6',
          dark: '#1e3a8a',
          light: '#416cc1',
          pale: '#f0f4fc',
          navy: '#0b132b'
        }
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif']
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.16, 1, 0.3, 1)'
      }
    }
  }
}
