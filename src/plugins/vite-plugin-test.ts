import type { Plugin } from 'vite'
export default (): Plugin => {
    return {
        name: 'test',
        // resolveId(source) {
        //     if (source === 'vm') return source
        //     return null
        // },
        // load(id) {
        //     // if (id === 'vm') {
        //     //     return {
        //     //         plugin: 'test',
        //     //     }
        //     // }
        //     return `export default "ss"`
        // },
        transform(code, id) {
            if (!/vue&type=i18n/.test(id)) {
                return
            }
            return `export default Comp => {
               return Comp.i18n = ${code}
            }`
        },
    }
}
