const getImgUrl = (name: string): string => {
    const path = `src/assets/images/${name}`
    const modules = import.meta.globEager('../assets/images')
    console.log(1 + path)
    console.log(modules)
    return 'xx'

    // return modules[path].default
}
export default getImgUrl
