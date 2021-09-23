import { Module } from 'vuex'
import { State } from '..'

const homeState = {
    index: 27,
}

export type homeState = typeof homeState

export default {
    namespaced: true,
    state: {
        index: 54,
    },
    mutations: {},
    actions: {},
} as Module<homeState, State>
