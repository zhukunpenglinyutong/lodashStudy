import { compact } from '../src/2.compact'

// false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”
test('1.compact', () => {

    let arr = [false, null, 0, '', undefined, NaN, 1, 2, -1, true]

    
    expect(compact()).toEqual([]) // 容错
    expect(compact(null)).toEqual([])
    expect(compact('123')).toEqual([])

    expect(compact(arr)).toEqual([1, 2, -1, true]) 
})