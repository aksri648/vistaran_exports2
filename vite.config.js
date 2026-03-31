import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Relative assets make the same build work on both custom domain and project pages URL.
  base: './',
  plugins: [react()],
})
