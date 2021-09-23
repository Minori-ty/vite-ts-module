import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import axiso from 'axios'
import homeModule from './modules/home'

export interface State {
    counter: number
    msg: string
}

export const key: InjectionKey<Store<State>> = Symbol()

export default createStore({
    state: {
        counter: 10,
        msg: '自定义的msg',
    },
    mutations: {
        add(state, data) {
            state.counter += data
        },
        change(state) {
            state.msg += '1'
        },
    },
    actions: {
        request(context) {
            // eslint-disable-next-line no-async-promise-executor
            return new Promise(async (resolve, reject) => {
                try {
                    const {
                        data: {
                            data: { count },
                        },
                    } = await axiso.post('/api/post')
                    console.log('延迟1秒再++')
                    context.commit('add', count)
                    resolve(count)
                } catch (error) {
                    reject(error)
                }
            })
        },
    },
    modules: {
        homeModule,
    },
})
