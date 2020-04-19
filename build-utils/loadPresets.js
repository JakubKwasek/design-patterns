const webpackMege = require("webpack-merge");

module.exports = env => {
	const { presets }  = env;
	const mergePresets = [].concat(...[presets]);
	const mergeConfigs = mergePresets.map(
		presetName => require(`./presets/webpack.${presetName}`)(env)
	);
	return webpackMege({}, ...mergeConfigs);
};
