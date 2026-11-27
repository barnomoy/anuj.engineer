// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'
// import { defineConfig } from 'vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
// })




// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'
// import { defineConfig } from 'vite'

// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   base: '/anuj.engineer/',
// })



import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.GITHUB_ACTIONS
    ? '/anuj.engineer/'
    : '/',
})
