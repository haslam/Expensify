const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//module.export (a node function) exposes object to another file.

//export a function to get access to the env
module.exports = (env) => {
//set env in package.json by piping --env production
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin("styles.css");

  return {
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, 'public'),
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
      CSSExtract
    ],
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
    }
  }
}

