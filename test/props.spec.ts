import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import defineProps from '../src/components/defineProps.vue'

describe('props', () => {
    it('props', () => {
        const wrapper = mount(defineProps, {
            props: {
                vue: 'vue3',
                form: {
                    name: '小明',
                },
                msg: '你好',
            },
        })

        expect(wrapper.text()).toContain('vue3')
    })
})
