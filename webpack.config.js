/* eslint-disable @typescript-eslint/no-var-requires */

const webpack = require('webpack')
const middleware = require('webpack-dev-middleware')
const path = require('path')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production'

    const config = {
        entry: ['react-hot-loader/patch', './src/index.tsx'],
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: 'babel-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader'],
                    exclude: /\.module\.css$/,
                },
                {
                    test: /\.ts(x)?$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.scss$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: isProduction || {
                                    localIdentName: '[name]__[local]--[hash:base64:5]',
                                },
                            },
                        },
                    ],
                    include: /\.module.css$/,
                },
                {
                    test: /\.svg$/,
                    use: 'file-loader',
                },
                {
                    test: /\.png$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                mimetype: 'image/png',
                            },
                        },
                    ],
                },
            ],
        },
        resolve: {
            extensions: ['.js', '.jsx', '.tsx', '.ts'],
            alias: {
                'react-dom': '@hot-loader/react-dom',
            },
        },
        devServer: {
            static: true,
        },
        plugins: [
            new BundleAnalyzerPlugin({
                analyzerMode: 'static',
                openAnalyzer: false,
            }),
            new MiniCssExtractPlugin(),
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: "./src/index.html"
            }),
        ],
        mode: isProduction ? 'production' : 'development',
    }

    if (!isProduction) {
        const compiler = webpack(config)

        middleware(compiler, {
            writeToDisk: true,
        })
    }

    return config
}