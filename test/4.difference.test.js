import { difference } from '../src/4.difference'

test('4.difference.js', () => {

    expect(difference()).toEqual([]) // 容错处理

    expect(difference([1,2,3,4,5,5], [1,4])).toEqual([2,3,5,5])

})



