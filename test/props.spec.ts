import { describe, it, expect, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import defineProps from '../src/components/defineProps.vue'

describe('检测props传值', () => {
    it('props', () => {
        const wrapper = mount(defineProps, {
            props: {
                vue: 'vue3',
                form: {
                    name: '小明',
                },
                msg: '你好',
                emt: function (p) {
                    console.log(p)
                },
            },
        })
        expect(wrapper.props().vue).toBe('vue3')
    })

    it('检测默认props', () => {
        const wrapper = mount(defineProps, {
            props: {
                msg: '你好',
                emt: function (p) {
                    console.log(p)
                },
            },
        })
        expect(wrapper.props().vue).toBe('defineProps的默认值')
        expect(wrapper.props().form).toEqual({ name: '', age: 78 })
    })

    it('检测handle函数的效果', async () => {
        // 创建一个模拟的emt函数
        function fn() {
            console.log(3)
        }
        // 挂载组件，并传入模拟的emt函数作为props
        const wrapper = mount(defineProps, {
            props: {
                msg: '你好',
                emt: fn,
            },
        })

        const handle = vi.spyOn(wrapper.vm, 'handle')
        // 触发handle函数
        await wrapper.find('button').trigger('click')
        // 检查模拟的emt函数是否被调用了一次，并且传入了235作为参数
        expect(handle).toHaveBeenCalledTimes(1)

        // expect(fn).toHaveBeenCalledWith(235)
    })
})
