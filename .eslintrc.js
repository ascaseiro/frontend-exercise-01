module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/essential',
		'@vue/airbnb',
		'@vue/typescript/recommended',
		'plugin:prettier/recommended',
		'plugin:import/typescript'
	],
	plugins: ['prettier'],
	parserOptions: {
		ecmaVersion: 2020
	},
	settings: {
		'import/resolver': {
			node: {
				paths: ['src'],
				extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue']
			}
		}
	},
	rules: {
		indent: [2, 'tab'],
		'no-tabs': 0,
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'@typescript-eslint/no-var-requires': 0,
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }]
	},
	overrides: [
		{
			files: [
				'**/__tests__/*.{j,t}s?(x)',
				'**/tests/unit/**/*.spec.{j,t}s?(x)'
			],
			env: {
				jest: true
			}
		},
		{
			files: ['*.vue'],
			rules: {
				'class-methods-use-this': [
					'error',
					{
						exceptMethods: [
							// vue lifecycle methods
							'beforeCreate',
							'created',
							'beforeMount',
							'mounted',
							'beforeUpdate',
							'updated',
							'activated',
							'deactivated',
							'beforeDestroy',
							'destroyed',
							'errorCaptured'
						]
					}
				]
			}
		}
	]
};
