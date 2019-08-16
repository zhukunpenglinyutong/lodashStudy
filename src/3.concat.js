/**
 * 创建一个新数组，将array与任何数组 或 值连接在一起
 * 
 * @param {Array} 被连接的数组
 * @param {values}(...*): 连接的值（此参数可以传很多个）
 * 
 * 这个合并更多的我还是用 [...arr1, ...arr2] 这种ES6 合并的方式
 */

export const concat = (arr = [], ...arr1) => {
    return [...arr, ...arr1]
}

// 官方版本，没找到!!!