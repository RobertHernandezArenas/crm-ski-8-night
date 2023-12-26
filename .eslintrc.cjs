/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	plugins: ['vue'],
	extends: [
		'prettier',
		'plugin:vue/vue3-essential',
		'plugin:vue/vue3-recommended',
		'eslint:recommended',
		'@vue/eslint-config-prettier/skip-formatting',
		'eslint-config-prettier',
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {},
};
