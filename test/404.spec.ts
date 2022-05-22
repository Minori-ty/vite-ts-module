import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../src/components/404.vue'

describe('HelloWorld', () => {
    it('renders properly', () => {
        const wrapper = mount(HelloWorld)
        expect(wrapper.text()).toContain('404')
    })
})
