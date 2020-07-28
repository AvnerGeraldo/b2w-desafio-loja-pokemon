const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    HtmlWebpackPlugin,
    CleanWebpackPlugin,
    MiniCssExtractPlugin,
    OptimizeCssAssetsPlugin
}