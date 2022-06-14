import { defineConfig } from "vite"
import * as path from 'path'
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      yjs: path.resolve("./node_modules/yjs/src/index.js"),
    },
  },
})
