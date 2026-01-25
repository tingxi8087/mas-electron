import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import tailwindcss from '@tailwindcss/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    devSourcemap: true,
  },
  build: {
    outDir: "dist/web",
    emptyOutDir: true,
    sourcemap: false,
  },
  base: "./", // 使用相对路径，确保打包后能正确加载资源
});
