import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import slotscope from '../src/components/slotscope.vue'

describe('emit', () => {
    it('ws', () => {
        const wrapper = mount(slotscope, {
            slots: {
                center: `
                <template #center="scoped">
                    <button>{{ scoped.item }}</button>
                </template>
                `,
            },
            props: {
                arr: [7, 8, 9],
            },
        })
        console.log(wrapper.get('button').text())

        expect(wrapper.get('button').text()).toBe('7')
    })
})
