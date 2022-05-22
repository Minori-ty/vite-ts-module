function fn<T extends object, K extends keyof T>(obj: T, key: K): T[K] {
    console.log(obj[key])

    return obj[key]
}
fn({ name: 'dd', age: 4 }, 'age')

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

// const Arr = ['a', 'b', 'c'] as const
// type arr = typeof Arr

// type Tuple<T extends readonly string[]> = {
//     [P in T[number]]: P
// }
// type r = Tuple<typeof Arr>
