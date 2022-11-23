const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isProduction = process.env.NODE_ENV === 'production';
const source = path.resolve(__dirname, 'src');
const outputPath = path.resolve(__dirname, 'build');
const handlerStyle = isProduction
  ? MiniCssExtractPlugin.loader
  : 'style-loader';
const fileNameOfScssModules = isProduction
  ? '[hash:base64:8]'
  : '[folder]_[local]__[hash:base64:2]';

const config = {
  context: path.resolve(__dirname, './'),
  entry: {
    index: './src/index.tsx',
  },
  output: {
    path: outputPath,
    clean: true,
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@helpers': path.resolve(__dirname, 'src/helpers'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@scss': path.resolve(__dirname, 'src/scss'),
    },
    extensions: ['.wasm', '.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        include: source,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
          'ts-loader',
        ],
      },
      {
        test: /\.scss$/i,
        use: [
          handlerStyle,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: {
                localIdentName: fileNameOfScssModules,
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['autoprefixer']],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.target = 'browserslist';
    config.mode = 'production';
    config.output.filename = '[name].bundle.js';
    config.output.assetModuleFilename = 'assets/[name][ext]';
    config.optimization = {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: true,
            format: {
              comments: false,
            },
          },
          extractComments: false,
        }),
        new CssMinimizerPlugin(),
      ],
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            type: 'css/mini-extract',
            chunks: 'all',
            enforce: true,
          },
        },
      },
    };

    config.plugins.push(new MiniCssExtractPlugin());
  } else {
    config.target = 'web';
    config.mode = 'development';
    config.output.filename = '[name][hash].js';
    config.output.assetModuleFilename = 'assets/[name][hash][ext][query]';
    config.devtool = 'source-map';
    config.devServer = {
      static: './build',
      host: 'localhost',
      hot: true,
      open: true,
      port: 3000,
      compress: true,
    };

    config.plugins.push(new BundleAnalyzerPlugin());
  }

  return config;
};
