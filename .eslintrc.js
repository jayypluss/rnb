module.exports = {
    env: {
        es6: true,
        node: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: [
        'react',
        'react-hooks',
        '@typescript-eslint',
        'prettier'
    ],
    rules: {
        indent: ['error', 'tab'],
        quotes: ['error', 'single', { avoidEscape: true }],
        "linebreak-style": [
            "error",
            "unix"
        ],
        semi: [
            "error",
            "never"
        ],
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'react/display-name': 'off',
        'react/prop-types': 'off',
        'prettier/prettier': 'error',
    },
    settings: {
        react: {
            "version": "detect", // React version. "detect" automatically picks the version you have installed.
                                 // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
                                 // It will default to "latest" and warn if missing, and to "detect" in the future
        },
    }
}
