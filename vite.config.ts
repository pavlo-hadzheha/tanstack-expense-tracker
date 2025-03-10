import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import tsconfigpaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import eslint from 'vite-plugin-eslint'
import autoImportsConfig from './src/core/config/auto-import/auto-imports.config.mjs'
import { AppIconsPlugin } from './src/core/config/auto-import/icons.resolver.mjs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({ routesDirectory: './src/app' }),
    react(),
    tsconfigpaths(),
    tailwindcss(),
    eslint(),
    autoImportsConfig(),
    AppIconsPlugin({ dir: './public/icons' }),
  ],
})
