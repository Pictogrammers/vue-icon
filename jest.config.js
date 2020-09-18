module.exports = {
	moduleFileExtensions: ['js', 'vue', 'json'],
	transform: {
		'.*\\.(vue)$': 'vue-jest',
		'.*\\.(js)$': ['babel-jest', { configFile: './babel.config.js' }],
	},
	transformIgnorePatterns: ['/node_modules/'],
}
