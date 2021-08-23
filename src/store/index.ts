import { InjectionKey } from 'vue'
import { createStore } from 'vuex'
import { Store } from 'vuex'

export const key: InjectionKey<Store<State>> = Symbol()

export type State = {
    counter: number
}
export default createStore({
    state: {
        counter: 10,
    },
    mutations: {
        add(state) {
            state.counter++
        },
    },
})
