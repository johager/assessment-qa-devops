const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    const arr = [1,2,3,4,5]
    const res = shuffleArray(arr)
    console.log("res:", res)
    console.log("typeof res:", typeof res)
    console.log("isArray(res):", Array.isArray(res))
    test('returns array', () => {
        expect(Array.isArray(res)).toBeTruthy()
    })
    test('returns same-length array', () => {
        expect(res.length).toBe(arr.length)
    })
})