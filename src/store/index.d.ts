import { homeState } from './modules/home/home.d'
import { aboutState } from './modules/about/about.d'
export interface State {
    counter: number
    msg: string
}

export interface InitState extends State {
    homeModule: homeState
    aboutModule: aboutState
}
