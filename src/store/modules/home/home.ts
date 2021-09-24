import { Module } from 'vuex'
import { State } from '../../index.d'
import { homeState } from './home.d'

const homeModule: Module<homeState, State> = {
    namespaced: true,
    state: {
        index: 27,
    },
    mutations: {
        add(state) {
            state.index++
        },
    },
}
export default homeModule
