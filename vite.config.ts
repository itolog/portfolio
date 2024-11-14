import react from "@vitejs/plugin-react-swc";

import { resolve } from "node:path";
import { defineConfig } from "vite";
// import { checker } from "vite-plugin-checker";
import eslintPlugin from "vite-plugin-eslint2";
import oxlintPlugin from "vite-plugin-oxlint";
import { VitePluginRadar } from "vite-plugin-radar";
import stylelint from "vite-plugin-stylelint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // checker({
    //   typescript: process.env.NODE_ENV !== "production",
    // }),
    react(),
    oxlintPlugin({
      path: "src",
      configFile: "eslintrc.json",
    }),
    eslintPlugin(),
    stylelint({
      fix: true,
      lintInWorker: true,
      cache: false,
    }),
    VitePluginRadar({
      analytics: {
        id: "G-SK973JG06T",
      },
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@components": resolve(__dirname, "./src/components"),
      "@assets": resolve(__dirname, "./src/assets"),
      "@layouts": resolve(__dirname, "./src/layouts"),
      "@store": resolve(__dirname, "./src/store"),
      "@pages": resolve(__dirname, "./src/pages"),
      "@router": resolve(__dirname, "./src/router"),
      "@styles": resolve(__dirname, "./src/styles"),
      "@ui": resolve(__dirname, "./src/ui"),
      "@types": resolve(__dirname, "./src/types"),
      "@constants": resolve(__dirname, "./src/constants"),
    },
  },
});
