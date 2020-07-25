const path = require('path')
const { HtmlWebpackPlugin, CleanWebpackPlugin } = require('./webpack-plugins')

module.exports = {
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx')
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        historyApiFallback: true
    },
    resolve: {
        extensions: [ '.ts', '.tsx', '.js' ]
    },
    module: {
        rules: [
            {
                test: /\.ts?(x)$/,
                use: 'ts-loader',
                exclude: [
                    /node_modules/,
                    /\.test.ts?(x)$/,
                    /\.spec.ts?(x)$/
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
                use: 'file-loader'
            }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve('src', 'index.html')
        })
    ]
    
}