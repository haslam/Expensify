const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//module.export (a node function) exposes object to another file.

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({ path: '.env.test' })
} 
else if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env.development' })
}
//manually pass the the above env vars down to bundle.js through webpacks [DefinePlugin] in plugins

//export a function to get access to the env
module.exports = (env) => {
//set env in package.json by piping --env production
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin("styles.css");

  return {
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
    {
      test: /\.s?css$/,
      use: CSSExtract.extract({
        use: [{
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true
        }
      }]
      })
    }]
    },
    plugins: [
      CSSExtract,
      new webpack.DefinePlugin({
        'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
        'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
        'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
        'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
        'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
        'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
      })
    ],
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  }
}

