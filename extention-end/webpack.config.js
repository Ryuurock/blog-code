var path = require( 'path' )
var webpack = require( 'webpack' )
//var alias = require( '../alias' )
var BundleAnalyzerPlugin = require( 'webpack-bundle-analyzer' ).BundleAnalyzerPlugin;

var bubleOptions = {
  target: process.env.NODE_ENV === 'production' ? null : { chrome: 52, firefox: 48 },
  objectAssign: 'Object.assign'
}

module.exports = {
  entry: {
    // 插入到微信平台的contentScript
    insertWechat: './src/platform/weixin/insertWechat.js',

    index: './src/index.js',
    background: './src/background.js',
    contentScript: './src/contentScript/contentScript.js',
    xhr: './src/contentScript/xhr.js',
    // 'devtools-background': './src/devtools-background.js',
    // backend: './src/backend.js',
    // proxy: './src/proxy.js',
    // detector: './src/detector.js'
  },
  output: {
    path: path.join( __dirname, 'src/build' ),
    filename: '[name].js'
  },
  resolve: {
    //alias
  },
  module: {
    rules: [ {
        test: /\.js$/,
        loader: 'babel-loader'
      }, {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          preserveWhitespace: false,
          buble: bubleOptions
        }
      }, {
        test: /\.(png|woff2)$/,
        loader: 'url-loader?limit=0'
      }
    ]
  },
  performance: {
    hints: false
  },
  plugins: [
    new webpack.ProvidePlugin( {
      jQuery: 'jquery',
      $: 'jquery'
    } ),
    //new BundleAnalyzerPlugin()
  ],
  devtool: process.env.NODE_ENV !== 'production' ?
    '#inline-source-map' : false
}

if ( process.env.NODE_ENV === 'production' ) {
  module.exports.plugins = [
    new webpack.DefinePlugin( {
      'process.env': {
        NODE_ENV: '"production"'
      }
    } )
  ]
}
