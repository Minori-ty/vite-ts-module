import { defineComponent, ref } from 'vue'
import color from './color'

export default defineComponent({
    components: {
        color,
    },
    setup() {
        const n = ref('999')
        const a = 1
        return () => (
            <>
                <color />
                <h1>tsx</h1>
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
