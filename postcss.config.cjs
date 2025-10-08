// Make PostCSS config resilient when tailwindcss / autoprefixer are not installed.
const plugins = {}

try {
  // eslint-disable-next-line global-require
  const tailwind = require('tailwindcss')
  plugins.tailwindcss = tailwind
} catch (e) {
  console.warn('postcss: tailwindcss not installed, skipping tailwind plugin')
}

try {
  // eslint-disable-next-line global-require
  const autoprefixer = require('autoprefixer')
  plugins.autoprefixer = autoprefixer
} catch (e) {
  console.warn('postcss: autoprefixer not installed, skipping autoprefixer plugin')
}

module.exports = { plugins }
