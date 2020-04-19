const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = () => ({
	devServer: {
		contentBase: path.join(__dirname, "../../", "dist"),
		historyApiFallback: true,
		watchContentBase: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "design patterns",
			template: path.join(__dirname, "../../", "templates/index.ejs"),
		}),
	],
});
