import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/",
  plugins: [react()],
  // resolve: {
    // alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  // },
  // server:{
    // port:3000
  // }
})
