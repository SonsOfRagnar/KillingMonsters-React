import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//import { dirname, resolve } from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  base: "/KillingMonsters-React/",
  plugins: [react()],
  // build:
  //   {
  //       outDir: '../docs',
  //       emptyOutDir: true,
  //       sourcemap: true,
  //       rollupOptions: {
  //           input: {
  //               main: resolve(import.meta.dirname, "src/index.html"),
  //               bestiary: resolve(__dirname, "src/html/bestiary.html"),
  //           }
  //       }        
  //   }
    
})
