import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";

export default tseslint.config([
    globalIgnores(["dist"]),
    {
        files: ["**/*.{ts,tsx}"],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs["recommended-latest"],
            reactRefresh.configs.vite,
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
    },
    {
        rules: {
            "indent": ["error", 4],
            "quotes": ["error", "double"],
            "semi": ["error", "always"],
            "no-console": ["error", { allow: ["info", "warn", "error"] }],
            "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1 }],
            "max-len": ["error", { code: 150 }],
            "quotes": ["error", "double"],
            "no-unused-vars": ["error", {
                vars: "all",
                args: "all",
                argsIgnorePattern: "^_"
            }],
        }
    }
]);
