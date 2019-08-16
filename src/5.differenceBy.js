/**
 * 这个方法类似 _.difference ，除了它接受一个 iteratee （迭代器）
 * 调用array 和 values 中的每个元素以产生比较的标准。结果值是从第一数组中选择。iteratee 会调用一个参数：(value)
 * 首先使用迭代器分别迭代array 和 values中的每个元素，返回的值作为比较值
 * 
 * @param {Array} 要检查的数组
 * @param {values}(...Array): 排除的值（此参数可以传很多个数组）
 * @param {Array|Function|Object|string} [iteratee=_.identity] : iteratee 调用每个元素
 */
