/**
 * 创建一个切片数组，去除array前面的n个元素。（n默认值为1。）
 * 
 * @param {Array} 要查询的数组。
 * @param {Number} 要去除的元素个数
 * @return {Array} 返回array剩余切片
 */

export const drop = (arr = [], n = 1) => {

    // 基础容错
    let len = arr.length
    if (len === 0) {
        return []
    }
    n < 0 ? n = 0 : ''

    // 核心使用数组的 slice() 方法，别用splice，会有问题的
    return arr.slice(n, len)
}

// 官方实现（意思是一个意思，但是官方的代码更骚）

// function drop(array, n=1) {
//     const length = array == null ? 0 : array.length
//     return length
//       ? slice(array, n < 0 ? 0 : n, length)
//       : []
// }