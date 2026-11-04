import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { wgslVitePlugin } from 'vgpu/client'

// Social crawlers need an absolute og:image URL. Uses VITE_SITE_URL if set, else Vercel's
// production domain when building there, else falls back to a relative path.
const siteUrl = () =>
  process.env.VITE_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : '')

const siteUrlPlugin = () => ({
  name: 'site-url',
  transformIndexHtml: (html) => html.replaceAll('__SITE_URL__', siteUrl()),
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [wgslVitePlugin(), react(), tailwindcss(), siteUrlPlugin()],
})
