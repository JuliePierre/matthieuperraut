module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-css-variables'),
    require('postcss-custom-media'),
    require('postcss-inline-svg')({
      paths: ['frontend/shared/static', 'node_modules/@fortawesome/fontawesome-free/svgs']
    }),
    require('postcss-nested'),
    require('postcss-url'),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    })
  ]
}
