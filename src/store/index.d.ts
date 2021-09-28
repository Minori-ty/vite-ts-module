import type { homeState } from './modules/home/home.d'
import type { aboutState } from './modules/about/about.d'
export interface State {
    counter: number
    msg: string
}

export interface Modules extends State {
    homeModule: homeState
    aboutModule: aboutState
}
