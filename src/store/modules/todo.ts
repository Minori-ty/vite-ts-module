import { Module } from 'vuex'
import { State } from '..'
import { Todo } from '../../type/type'

const initialState = {
    todos: [] as Todo[],
}

export type TodoState = typeof initialState

export default {
    state: initialState,
    mutations: {
        initTodo(state, payload: Todo[]) {
            state.todos = payload
        },
        addTodo(state, payload: Todo) {
            state.todos.push(payload)
        },
    },
} as Module<TodoState, State>
