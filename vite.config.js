// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   base:"/user-create-update-delete-reactjs-springboot-hibernate-frontend/",
//   plugins: [react()],
//   server:{
//     port:3000,
//   }
// })
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/user-create-update-delete-reactjs-springboot-hibernate-frontend/' : '/',
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist', // Specify the output directory for production builds
    assetsDir: '', // Set to an empty string to include assets in the root of the output directory
  },
});
