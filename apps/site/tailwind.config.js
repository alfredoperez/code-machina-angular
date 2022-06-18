const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#a78bfa",
          "secondary": "#7dd3fc",
          "accent": "#f472b6",
          "neutral": "#d6d3d1",
          "base-100": "#212121",
          "info": "#93E6FB",
          "success": "#4ade80",
          "warning": "#fde047",
          "error": "#f87171",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
