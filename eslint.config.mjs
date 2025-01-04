import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{html,ts}"]
  },
  {
    ignores: [
      "**/*.spec.ts",
      "**/*test.ts",
      "**/*.js",
      "main.ts",
      "polyfills.ts",
      "**/temp.js", 
      "config/*"]
  },
  {
    languageOptions: { 
      globals: globals.browser 
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
        "no-unused-vars": "warn",
        "no-undef": "error",
        "linebreak-style": "off",
        "quotes": "off",
        "padded-blocks": "off",
        "array-bracket-spacing": "off",
        "prefer-const": "error",
        "space-in-parens": "off",
        "no-multiple-empty-lines": "off",
        "no-console": "error"
    }
  }
];