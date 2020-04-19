const webpackMege = require("webpack-merge");
const presetsConfig = require("./build-utils/loadPresets");
const path = require("path");

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
	return webpackMege(
		{
			mode,
			resolve: {
				extensions: [".ts", ".js"],
			},
			module: {
				rules: [
					{
						test: /\.js$/,
						enforce: "pre",
						loader: "source-map-loader",
					},
					{
						test: /\.ts(x?)$/,
						exclude: /node_modules/,
						use: [{ loader: "ts-loader" }],
					},
				],
			},
			output: {
				path: path.join(__dirname, "dist"),
				filename: "[name].bundle.js",
			},
		},
		presetsConfig({ mode, presets })
	);
};
