import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { viteMockServe } from 'vite-plugin-mock'
// import test from './src/plugins/vite-plugin-test'
import PurgeIcons from 'vite-plugin-purge-icons'

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    plugins: [
        vue(),
        vueJsx(),
        viteMockServe({
            mockPath: 'mock',
        }),
        PurgeIcons({
            content: ['**/*.html', '**/*.js', '**/*.vue'],
        }),
    ],
    resolve: {
        alias: {
            '@': './src',
        },
    },
    build: {
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
    esbuild: {
        pure: ['console.log'],
        drop: ['debugger'],
    },
    define: {
        // 启用生产环境构建下激活不匹配的详细警告
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'true',
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
