module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint"],
	env: {
		es6: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:prettier/recommended",
	],
	rules: {
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": "off",
		"@typescript-eslint/no-var-requires": "off",
		"@typescript-eslint/semi": ["error"],
		quotes: ["error", "double"],
		"comma-dangle": [
			"error",
			{
				arrays: "always-multiline",
				objects: "always-multiline",
				imports: "never",
				exports: "never",
			},
		],
		"jsx-quotes": ["error", "prefer-double"],
		indent: ["error", "tab"],
		eqeqeq: "error",
		"no-multi-str": "error",
		"arrow-spacing": ["error", { before: true, after: true }],
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};
