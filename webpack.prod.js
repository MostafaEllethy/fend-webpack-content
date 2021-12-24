const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')

module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
            minify: true
        }),
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin()
    ],
    module: {
        rules: [
            {
                loader: 'babel-loader',
                exclude: '/node_modules/',
                test: '/\.js$/'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ]
            }
        ]
    }
}