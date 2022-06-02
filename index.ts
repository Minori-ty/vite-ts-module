function fn<T extends object, K extends keyof T>(obj: T, key: K): T[K] {
    console.log(obj[key])

    return obj[key]
}
fn({ name: 'dd', age: 4 }, 'name')

type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}
interface todo {
    title: string
    name: string
    complete: boolean
}
const d: MyPick<todo, 'title' | 'name'> = {
    title: 'sss',
    name: 'ss',
}
type F = keyof todo
const a: F = 'complete'
console.log(a, d)

function ob(obj: object, key: string) {
    return obj[key as keyof typeof obj]
}
const obj = { name: 'ss' }
ob(obj, 's')
