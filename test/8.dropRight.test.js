import { dropRight } from '../src/8.dropRight'

test('8.dropRight', () => {

    let arr = [1,2,3]

    expect(dropRight()).toEqual([]) // 容错处理
    expect(dropRight(arr)).toEqual([1, 2])
    expect(dropRight(arr, -1)).toEqual([1, 2, 3])
    expect(dropRight(arr, 0)).toEqual([1, 2, 3])

    expect(dropRight(arr, 1)).toEqual([1, 2])
    expect(dropRight(arr, 2)).toEqual([1])
    expect(dropRight(arr, 3)).toEqual([])
})
