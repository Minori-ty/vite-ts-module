const getImgUrl = (name: string): string => {
    const path = `/src/assets/images/icons/${name}`
    const modules = import.meta.globEager('/src/assets/images/icons/*')
    return modules[path].default
}
export default getImgUrl
