import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import defineEmits from '../src/components/defineEmits.vue'

describe('emit', () => {
    it('ws', () => {
        const wrapper = mount(defineEmits)
        wrapper.get('button').trigger('click')
        wrapper.get('button').trigger('click')
        // console.log(wrapper.emitted('ws'))

        expect(wrapper.emitted()).toHaveProperty('ws')
        console.log(wrapper.emitted('ws')[0][0])

        expect(wrapper.emitted('ws')[0][0]).toBe('27')
    })
})
