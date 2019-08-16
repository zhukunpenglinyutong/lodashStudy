/**
 * 创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）
 * 
 * @param {Array} 要查询的数组。
 * @param {Number} 要去除的元素个数
 * @return {Array} 返回array剩余切片
 */

export const dropRight = (arr = [], n = 1) => {
    
    // 我在 7.drop.js 中看到了 官方写的骚操作，我这里也试着写一下
    let len = arr.length

    // 学学官方的骚操作（骚断腿）
    // 我的 len - n 和 n < 0 ? 0 : -n 有异曲同工之妙，精彩，精彩
    // 这两种的作用都是，在 n < 0 的时候，保证返回的是 arr
    return len
        ? arr.slice(0, len - n)
        : []

}

// 官方代码

// function dropRight(array, n=1) {
//     const length = array == null ? 0 : array.length
//     return length ? slice(array, 0, n < 0 ? 0 : -n) : []
// }