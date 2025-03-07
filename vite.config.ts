import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import tsconfigpaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({ routesDirectory: './src/app' }),
    react(),
    tsconfigpaths(),
    tailwindcss(),
    eslint()
  ],
})
