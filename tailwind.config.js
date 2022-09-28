module.exports = {
  theme:    {
    container: {
      center: true
    },
    extend: {
      screens: {
        'xs': '430px',
        'xxs': '280px'
      },
      lineHeight: {
        full: '100%'
      },
      colors: {
        'primary-lighter': '#e0f2fe',
        'primary-light': '#7dd3fc',
        primary: '#0ea5e9',
        'primary-dark': '#0369a1',
        'primary-darker': '#0c4a6e',

        secondary: '#f2f7ff',

        'gray-custom': '#f7f9fc',
      },
      zIndex: {
        '-10': '-10',
      },
      boxShadow: {
        'outline-inverse': '0 0 0 3px rgba(235, 248, 255, 0.5)',
      }
    },
  },
  variants: {},
  content: ['./src/**/*.svelte', './src/**/*.html'],
  options: {
      whitelistPatterns: [/^(row|col)-start-/, /svelte-/],

      defaultExtractor: (content) => {
        const regExp = new RegExp(/[A-Za-z0-9-_:/]+/g);
        const matchedTokens = [];
        let match = regExp.exec(content);
        while (match) {
          if (match[0].startsWith('class:')) {
            matchedTokens.push(match[0].substring(6));
          } else {
            matchedTokens.push(match[0]);
          }
          match = regExp.exec(content);
        }
        return matchedTokens;
      },
  },
  future:   {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault:         true,
  },
  plugins:  [],
};
