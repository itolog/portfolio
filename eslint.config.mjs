import { defineConfig, globalIgnores } from "eslint/config";
import { fixupConfigRules } from "@eslint/compat";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([globalIgnores([
    "**/dist",
    "**/.eslintrc.json",
    "**/node_modules/",
    "**/dist/",
    "src/vite-env.d.ts",
    "**/.idea",
]), {
    extends: fixupConfigRules(compat.extends(
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:oxlint/recommended",
        "plugin:react/recommended",
        "plugin:import/recommended",
        "plugin:jsx-a11y/recommended",
        "eslint-config-prettier",
    )),

    plugins: {
        "react-refresh": reactRefresh,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
        },

        parser: tsParser,
    },

    settings: {
        react: {
            version: "detect",
        },

        "import/resolver": {
            node: {
                paths: ["src"],
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },
    },

    rules: {
        "react/no-unknown-property": "off",
        "react/prop-types": "off",
        "import/named": "off",
        "import/no-unresolved": "off",
        "no-unused-vars": "off",
        "import/no-named-as-default-member": "off",

        "react/self-closing-comp": ["warn", {
            component: true,
            html: true,
        }],

        "@typescript-eslint/no-unused-vars": ["warn", {
            vars: "local",
            ignoreRestSiblings: false,
            varsIgnorePattern: "React",
        }],

        "react/react-in-jsx-scope": "off",

        "react-refresh/only-export-components": ["warn", {
            allowConstantExport: true,
        }],

        semi: ["warn", "always"],

        "no-console": ["warn", {
            allow: ["warn", "error"],
        }],

        quotes: ["warn", "double", {
            avoidEscape: true,
        }],

        "no-useless-escape": "warn",
        "no-return-assign": "off",
        "no-inner-declarations": "warn",
        "require-yield": "warn",
        "spaced-comment": "error",
        "no-duplicate-imports": "off",
    },
}]);