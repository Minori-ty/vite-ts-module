let data = 0
for (let i = 0; i < 1000000; i++) {
    // console.log(i)
    data = i
}
postMessage(data)
