/**
 * 创建一个新数组，包含原数组中所有的非假值元素。
 * 例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”
 * 
 * @param {Array} 待处理的数组
 * @return {Array} 返回过滤掉假值的新数组
 */

export const compact = (arr = []) => {

    // 容错机制
    Array.isArray(arr) ? '' : arr = []
    let len = arr.length

    if (len === 0) {
        return arr
    }

    let _arr = []

    for (let i = 0; i < len; i++) {

        // 怎么判定是假值，直接借助内部机制进行
        arr[i] ? _arr.push(arr[i]) : ''
    }

    return _arr

}

// 官方实现
// function compact(array) {
//     let resIndex = 0
//     const result = []
  
//     if (array == null) {
//       return result
//     }
  
//     for (const value of array) {
//       if (value) {
//         result[resIndex++] = value
//       }
//     }
//     return result
// }