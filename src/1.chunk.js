/**
 * 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 
 * 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
 * 
 * @param {Array} 需要处理的数组
 * @param {Number} 每个数组区块的长度，默认值为1
 * @return {Array} 返回一个包含拆分区块的新数组（相当于一个二维数组）。
 */

export const chunk = (arr = [], size = 1) => {

    // 防止传入的 arr 不是数组，也可以用 Array.isArray 进行判定
    const len = (Object.prototype.toString.call(arr) === "[object Array]" ? arr.length : 0)
    // 向上取整，防止传入小数
    size = Math.ceil(size)
    if (len === 0 || size < 1) {
        return []
    }

    // 核心：运用数组方法 slice() 进行切割
    // 1.要确定要分隔几段，这样才能进行处理
    let _arr = []
    let frequency = Math.ceil(arr.length/size) // 循环次数
    for (let i = 0; i < frequency; i++) {
        _arr.push(arr.slice(i * size, (i+1) * size))
    }

    return _arr
}

// 官方实现
// function chunk(array, size) {
    
//   // 容错机制
//   size = Math.max(size, 0)
//   const length = array == null ? 0 : array.length
//   if (!length || size < 1) {
//     return []
//   }

//   let index = 0
//   let resIndex = 0
//   const result = new Array(Math.ceil(length / size))

//   while (index < length) {
//     result[resIndex++] = slice(array, index, (index += size))
//   }
//   return result

// }
  


