const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    const arr = [1,2,3,4,5]
    const res = shuffleArray(arr)

    test('returns array', () => {
        console.log("isArray(res):", Array.isArray(res))
        expect(Array.isArray(res)).toBeTruthy()
    })
    test('returns same-length array', () => {
        expect(res.length).toBe(arr.length)
    })
    test('returns same items in array', () => {
        const resSorted = res.slice().sort()
        const sameElements = arr.every((val, index) => val === resSorted[index])
        expect(sameElements).toBe(true)
    })
    test('returns shuffled array', () => {
        let isSameVal = true
        for (let i in arr) {
            if (arr[i] != res[i]) {
                isSameVal = false
            }
        }
        expect(isSameVal).toBe(false)
    })
})