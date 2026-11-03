import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { wgslVitePlugin } from 'vgpu/client'

// https://vite.dev/config/
export default defineConfig({
  plugins: [wgslVitePlugin(), react(), tailwindcss()],
})
