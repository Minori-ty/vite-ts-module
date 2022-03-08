import { defineComponent } from 'vue'
export default defineComponent({
    name: 'color',
    setup() {
        const a = 1
        return () => (
            <>
                <h1>tsx-color</h1>
                <h2 style="color:red">style</h2>
                <h3>{a}</h3>
            </>
        )
    },
})
