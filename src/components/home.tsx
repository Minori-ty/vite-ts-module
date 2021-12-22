import { defineComponent } from 'vue'
export default defineComponent({
    name: 'home',
    setup() {
        const a = 1
        return () => (
            <>
                <h1>home</h1>
                <h2 style="color:red">style</h2>
            </>
        )
    },
})
