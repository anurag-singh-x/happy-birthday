import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base: "/happy-birthday",
  server:{
    headers:{
      'Content-Security-Policy': "default-src 'self'; font-src 'self' https://fonts.gstatic.com;",
    }
  }
})
