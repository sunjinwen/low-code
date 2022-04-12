/**
 * 判断数据类型
 */
export const typeOf = function(value: any): any {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase()
}

/**
 * 数组类型
 */
export const isArray = (value: any): boolean => typeOf(value) === 'array'

/**
 * 对象类型
 */
export const isObject = (value: any): boolean => typeOf(value) === 'object'

/**
 * null
 */
export const isNull = (value: any): boolean => typeOf(value) === 'null'

/**
 * undefined
 */
export const isUndefined = (value: any): boolean => typeOf(value) === 'undefined'

/**
 * string
 */
export const isString = (value: any): boolean => typeOf(value) === 'string'

/**
 * number
 */
export const isNumber = (value: any): boolean => typeOf(value) === 'number'

/**
 * function
 */
export const isFunction = (value: any): boolean => typeOf(value) === 'function'
