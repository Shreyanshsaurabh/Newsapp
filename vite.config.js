import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'server/dist'
  },
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 10000,
    strictPort: true,
    allowedHosts: ['newsapp-d2fi.onrender.com']
  }
});
