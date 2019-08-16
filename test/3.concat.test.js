import { concat } from '../src/3.concat'

test('3.concat.js', () => {

    expect(concat()).toEqual([]) // 判断容错机制

    expect(concat([1], '你好', 1, 0, false, null, undefined)).toEqual([1, '你好', 1, 0, false, null, undefined])

})