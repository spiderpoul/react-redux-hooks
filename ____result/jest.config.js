module.exports = {
    verbose: true,
    moduleFileExtensions: ['js', 'jsx'],
    setupFiles: ["./tests/setup.js"],
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    transform: {
        '^.+\\.js[x]?$': 'babel-jest'
      },
};