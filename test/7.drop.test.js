import { drop } from '../src/7.drop'

test('7.drop', () => {

    let arr = [1,2,3]

    expect(drop()).toEqual([]) // 容错处理
    expect(drop(arr)).toEqual([2, 3])
    expect(drop(arr, -1)).toEqual([1, 2, 3])
    expect(drop(arr, 0)).toEqual([1, 2, 3])

    expect(drop(arr, 1)).toEqual([2, 3])
    expect(drop(arr, 2)).toEqual([3])
    expect(drop(arr, 3)).toEqual([])
})
