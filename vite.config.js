import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Custom domain is served from root, not a repo subpath.
  base: '/',
  plugins: [react()],
})
