'use strict'
const path = require('path')
const config = require('../config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const packageConfig = require('../package.json')

exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory

  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }
  //全局scss设置
  function generateSassResourceLoader () {
      var loaders = [
          cssLoader,
          //postcssLoader, px2remLoader, // 若需要则加上这一行，不用就不加
          'sass-loader',
          {
              loader: 'sass-resources-loader',
              options: {
                  resources: [
                    path.resolve(__dirname, '../src/assets/scss/variables/variables.scss')
          
                  ]
              }
          }
      ]
      if (options.extract) {
          return ExtractTextPlugin.extract({
              use: loaders,
              fallback: 'vue-style-loader'
          })
      } else {
          return ['vue-style-loader'].concat(loaders)
      }
  }
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    // sass: generateLoaders('sass', { indentedSyntax: true }),
    //scss: generateLoaders('sass'),
    //设置一
    sass:generateSassResourceLoader(),
    scss:generateSassResourceLoader(),
    //设置二 重复
    // scss: generateLoaders('sass').concat(
    //   {
    //     loader: 'sass-resources-loader',
    //     options: {
    //     resources: [
    //         path.resolve(__dirname, '../src/assets/scss/init.scss'),
    //         path.resolve(__dirname, '../node_modules/bootstrap/scss/bootstrap-reboot.scss')
    //     ]
    //     }
    //   }
    // ),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)

  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output
}

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}
