import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "node:path";
// @ts-ignore
import eslintPlugin from "vite-plugin-eslint";
// @ts-ignore
import oxlintPlugin from "vite-plugin-oxlint";
import stylelint from "vite-plugin-stylelint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    oxlintPlugin({
      path: "src",
    }),
    eslintPlugin(),
    stylelint({
      fix: true,
      lintInWorker: true,
      cache: false,
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
      "@ui": resolve(__dirname, "./src/UI"),
      "@types": resolve(__dirname, "./src/types"),
      "@constants": resolve(__dirname, "./src/constants"),
    },
  },
});
