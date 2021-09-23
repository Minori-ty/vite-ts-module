module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/prettier',
        'eslint:recommended',
        '@vue/typescript/recommended',
        '@vue/prettier/@typescript-eslint',
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        '@typescript-eslint/no-explicit-any': ['off'],
        'prettier/prettier': [
            'warn',
            {
                singleQute: true,
                semi: false,
                // trailingComma:'es5',
                endOfLine: 'auto',
            },
        ],
        '@typescript-eslint/indent': ['off'],
    },
    globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineComponent: 'readonly',
        defineExpose: 'readonly',
    },
}
