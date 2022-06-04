const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
    publicPath: "/",
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	mode: 'development',
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
					},
				],
			},
			{
				test: /\.(s*)css$/,
				use: [
					{
						loader: miniCssExtractPlugin.loader,
					},
					'css-loader',
					'sass-loader',
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html',
		}),
		new miniCssExtractPlugin({
			filename: 'assets/[name].css',
		}),
	],
	devServer: {
		static: path.join(__dirname, 'dist'),
    historyApiFallback: true,
		compress: true,
		port: 3000,
		open: true,
	},
	// devServer: {
  //   static: {
  //     directory: path.resolve(__dirname, "dist"),
  //   },
  //   devMiddleware: {
  //     index: 'index.html',
  //   },
  //   historyApiFallback: true,
  //   compress: true,
  //   port: 3000,
  // },
}
