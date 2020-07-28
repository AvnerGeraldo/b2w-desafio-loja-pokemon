const path = require('path')
const { HtmlWebpackPlugin, CleanWebpackPlugin, MiniCssExtractPlugin, OptimizeCssAssetsPlugin } = require('./webpack-plugins')

module.exports = {
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx')
    },
    resolve: {
        extensions: [ '.ts', '.tsx', '.js', 'jsx' ]
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: [
                    /node_modules/,
                    /\.test.(ts|tsx)$/,
                    /\.spec.(ts|tsx)$/
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                     'css-loader'
                ]
              },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'images/'
                    }
                }]
            }
        ]
    },
    output: {
        filename: '[name].[contenthash].js',
        chunkFilename: '[name][contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'B2W: Desafio Loja Pokemon',
            filename: 'index.html',
            inject: true,
            template: path.resolve(__dirname, 'src', 'index.html'),
        })
    ],
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin({
                cssProcessorOptions: {
                    map: {
                        inline: true,
                        annotation: false,
                    },
                }
            })
        ],
        splitChunks: {
            chunks: 'all'
        }
    }   
}