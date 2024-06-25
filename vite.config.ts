import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  },
})

module.exports = {
  build: {
    // **Disables type checking during build**
    minify: false,
    // Add other build options if needed
  },
};
