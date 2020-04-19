const CompressionWebpackPlugin = require("compression-webpack-plugin");

module.exports = () => ({
	devtool: "source-map",
	plugins: [
		new CompressionWebpackPlugin()
	],
});
