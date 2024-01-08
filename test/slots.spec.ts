import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import slots from '../src/components/slots.vue'

describe('emit', () => {
    it('left插槽', () => {
        const wrapper = mount(slots, {
            slots: {
                left: "<div id='test'>left</div>",
                right: `<div>right</div>`,
                center: `<div>center</div>`,
            },
        })
        expect(wrapper.find('#test').text()).toContain('left')
        expect(wrapper.text()).toContain('right')
        expect(wrapper.text()).toContain('center')
    })
})
