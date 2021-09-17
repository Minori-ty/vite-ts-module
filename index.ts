interface Todo<T> {
    age: T
}
const obj: Todo<number> = {
    age: 1,
}
console.log(obj)

class P {
    M<T>(config: Todo<T>): Todo<T> {
        return config
    }
}
console.log(P)
