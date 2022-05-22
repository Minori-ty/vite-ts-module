/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { viteMockServe } from 'vite-plugin-mock'
// import test from './src/plugins/vite-plugin-test'
// import { defineConfig } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    plugins: [
        vue(),
        vueJsx(),
        viteMockServe({
            mockPath: 'mock',
        }),
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
        reportCompressedSize: false,
        sourcemap: true,
        rollupOptions: {
            output: {
                chunkFileNames: 'js/[name]-[hash].js',
                entryFileNames: 'js/[name]-[hash].js',
                assetFileNames: '[ext]/[name]-[hash].[ext]',
            },
        },
    },
    test: {
        include: ['test/**/*.spec.ts'],
        environment: 'jsdom',
        deps: {
            inline: ['@vue', '@vueuse', 'vue-demi'],
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
