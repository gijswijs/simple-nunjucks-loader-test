const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  context: path.resolve(__dirname, 'src'),

  output: {
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.njk$/,
        use: [
          {
            loader: 'simple-nunjucks-loader',
            options: {
              filters: {
                filter: path.join(__dirname, 'src', 'filter.js')
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './template.njk',
      templateParameters: {
        username: 'Gijs'
      }
    })
  ],
  
  stats: 'detailed'
}