module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "standard-with-typescript",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaFeatures": {},
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "ignorePatterns": [
        "**/*.spec.ts",
        "**/*test.ts",
        "main.ts",
        "polyfills.ts"
    ],
    "rules": {
        "@typescript-eslint/semi": "off",
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/consistent-type-imports": "off",
        "@typescript-eslint/indent": "warn",
        "padded-blocks": "warn",
        "array-bracket-spacing": "warn",
        "prefer-const": "error",
        "space-in-parens": "warn",
        "@typescript-eslint/space-before-function-paren": "warn",
        "@typescript-eslint/no-extraneous-class": "warn",
        "@typescript-eslint/prefer-readonly": "warn"
    }
}
