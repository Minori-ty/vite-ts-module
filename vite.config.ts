import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { viteMockServe } from 'vite-plugin-mock'
import test from './src/plugins/vite-plugin-test'

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    plugins: [
        vue(),
        vueJsx(),
        viteMockServe({
            mockPath: 'mock',
        }),
        test,
    ],
    resolve: {
        alias: {
            '@': './src',
        },
    },
    build: {
        terserOptions: {
            compress: {
                //生产环境时移除console
                drop_console: true,
                drop_debugger: true,
            },
        },
        // 取消计算文件大小，加快打包速度
        brotliSize: false,
        sourcemap: true,
        assetsDir: 'static/img',
        rollupOptions: {
            output: {
                chunkFileNames: 'static/js/[name]-[hash].js',
                entryFileNames: 'static/js/[name]-[hash].js',
                assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
            },
        },
    },
    // server: {
    //     proxy: {
    //         '/api': {
    //             target: 'http://api.help.bj.cn/apis/weather/?id=101270101',
    //             rewrite: path => path.replace(/^\/api/, ''),
    //         },
    //     },
    // },
})
