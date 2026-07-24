import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Relative assets keep local production previews portable. GitHub Actions
  // supplies an explicit repository base path for Pages deployments.
  base: process.env.VITE_BASE_PATH || './',
  build: {
    sourcemap: true,
    chunkSizeWarningLimit: 1000,
  },
})
