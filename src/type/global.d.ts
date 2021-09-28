import type { State, Modules } from '../store/index.d'
import { Store } from 'vuex'

interface filters {
    FormDate: () => void
}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $store: Store<Modules>
        $filters: filters
    }
}
