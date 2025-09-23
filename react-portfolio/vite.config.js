import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set `base` to the repository name so the built site works when served
// from GitHub Pages at https://<username>.github.io/portfolio/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/react-version',
})
