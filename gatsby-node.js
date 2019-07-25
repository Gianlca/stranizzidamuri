/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const webpack = require('webpack');
exports.onCreateWebpackConfig = ({
  stage, loaders, actions,
  }) => {
    if (stage === "build-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /react-owl-carousel/,
              use: loaders.null(),
            },
          ],
        },
      })
    }      
    actions.setWebpackConfig({
      plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
      ],
    })  
  }