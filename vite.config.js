import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/big_5_personality_frontend/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets', // Ensure assets are placed here
  },
})
