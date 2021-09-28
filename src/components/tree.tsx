import { defineComponent, ref } from 'vue'
import home from './home'

export default defineComponent({
    components: {
        home,
    },
    setup() {
        const n = ref('999')
        return () => (
            <>
                <home />
                <h1>jsx</h1>
                <h2>{n.value}</h2>
                <article>
                    <section>
                        <p>你好</p>
                    </section>
                </article>
            </>
        )
    },
})
