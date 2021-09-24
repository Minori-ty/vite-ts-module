import { Module } from 'vuex'
import { State } from '../../index.d'
import { aboutState } from './about.d'

const aboutModule: Module<aboutState, State> = {
    namespaced: true,
    state: {
        about: 'about',
    },
    mutations: {
        add(state) {
            console.log(state.about)
        },
    },
}
export default aboutModule
