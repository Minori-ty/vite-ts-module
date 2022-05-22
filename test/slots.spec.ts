import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import slots from '../src/components/slots.vue'

describe('emit', () => {
    it('ws', () => {
        const wrapper = mount(slots, {
            slots: {
                left: "<div id='test'>left</div>",
            },
        })
        expect(wrapper.find('#test').text()).toContain('left')
    })
})
