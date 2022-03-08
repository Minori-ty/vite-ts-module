import { defineComponent, ref } from 'vue'
import home from './home'

export default defineComponent({
    components: {
        home,
    },
    setup() {
        const n = ref('999')
        const a = 1
        return () => (
            <>
                <home />
                <h1>jsx</h1>
                <h2>{n.value}</h2>
                <article>
                    <section>
                        <p>{a}</p>
                    </section>
                </article>
            </>
        )
    },
})
