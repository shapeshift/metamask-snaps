/* eslint-disable simple-import-sort/imports */
/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
import { resolve } from 'path'
import SnapsWebpackPlugin from '@metamask/snaps-webpack-plugin'
import { Configuration } from 'webpack'
import { merge } from 'webpack-merge'
import WebpackBarPlugin from 'webpackbar'

const HookShellScriptWebpackPlugin = require('hook-shell-script-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

// Configuration that is shared between the two bundles
const common: Configuration = {
  // For simplicity, we don't do any optimisations here. Ideally, this would be
  // dependent on the `NODE_ENV` or script you're running.
  mode: 'development',
  devtool: 'source-map',
  externals: [nodeExternals({ importType: 'umd' })],
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: './dist',
  },
  module: {
    rules: [
      {
        test: /\.(m?js|ts)x?$/u,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [new WebpackBarPlugin()],
  stats: 'errors-only',
  watchOptions: {
    ignored: ['**/snap.manifest.json'],
  },
  resolve: {
    extensions: ['', '.js', '.ts'],
    fallback: {
      crypto: require.resolve('crypto-browserify'),
      path: require.resolve('path-browserify'),
      stream: require.resolve('stream-browserify'),
    },
  },
}

// Configuration for the Snap bundle
const snapConfig: Configuration = merge(common, {
  entry: {
    snap: './src/index.ts',
  },
  output: {
    // Required so that webpack doesn't mangle our `exports` variable
    libraryTarget: 'commonjs',
  },
  plugins: [
    new SnapsWebpackPlugin(),
    new HookShellScriptWebpackPlugin({
      afterEmit: ['yarn manifest', 'yarn eval'],
    }),
  ],
})

const config = [snapConfig]
// eslint-disable-next-line import/no-default-export
export default config
