/**
 * 创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中
 * 即创建一个新数组，这个数组中的值，为第一个数字（array 参数）排除了给定数组中的值
 * 该方法使用 SameValueZero做相等比较。结果值的顺序是由第一个数组中的顺序确定。
 * 
 * @param {Array} 要检查的数组
 * @param {values}(...Array): 排除的值（此参数可以传很多个数组）
 */

// difference([1,2,3,4,5,5], [1,4]) // [2,3,5,5]
export const difference = (arr = [], c = []) => {

    // 思考方法一：双层循环，时间复杂度 O方, 核心是用数组的截取splice
    for (let i = 0; i < c.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === c[i]) {
                arr.splice(j, 1)
            }
        }
    }

    // 思考方法二：肯定还有更好的方法

    return arr
}

// 官方实现
// function difference(array, ...values) {
//     return isArrayLikeObject(array)
//       ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
//       : []
// }