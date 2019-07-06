const path = require('path');

module.exports = (env, args) => {
	return {
		entry: {
			'scripts/main': './src/index.tsx',
		},
		output: {
			path: path.resolve('./dist'),
		},
		target: 'web',
		devtool: 'source-map',
		mode: "development",
		resolve: {
			extensions: ['.tsx', '.ts', '.js'],
		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					exclude: /node_modules/,
					use: [{
						loader: 'ts-loader',
						options: {
							transpileOnly: true,
						},
					}],
				},
			],
		},
	};
};