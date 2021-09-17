import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    plugins: [
        vue(),
        viteMockServe({
            mockPath: 'mock',
        }),
    ],
    // server: {
    //     proxy: {
    //         '/api': {
    //             target: 'http://www.baidu.com',
    //             rewrite: (path) => path.replace(/^\/api/, ''),
    //         },
    //     },
    // },
})
