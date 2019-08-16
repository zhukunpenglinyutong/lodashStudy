import { chunk } from '../src/1.chunk'

test('1.chunk', () => {

    let arr = [0, 1, 2, 3, 4, 5]

    expect(chunk()).toEqual([]) // 判断容错机制
    expect(chunk(1)).toEqual([])
    expect(chunk(null)).toEqual([])
    
    expect(chunk(arr, 3)).toEqual([[0, 1, 2], [3, 4, 5]])
    expect(chunk(arr, 4)).toEqual([[0, 1, 2, 3], [4, 5]])
    expect(chunk(arr, -1)).toEqual([]) // 测试负数
    expect(chunk(arr, 2.5)).toEqual([[0, 1, 2], [3, 4, 5]]) // 测试小数
    expect(chunk(arr, '3')).toEqual([[0, 1, 2], [3, 4, 5]]) // 测试非数值类型
    expect(chunk(arr, 'sdfas')).toEqual([]) // 测试非数值类型
    expect(chunk(arr, null)).toEqual([])

})