import { ref, isRef, watch } from 'vue';
import { isArray, isFunction, isNull, isObject, isString, isUndefined } from './utils/utils';
import { cloneDeep } from 'lodash';

/**
 * 数据域类结构
 */
export interface DataInterface {
  /** 父集 */
  _super: DataInterface
  /** 字段是否从父集来 */
  _source: {
    [propName: string]: {
      value: any,
      isParent: boolean
    }
  }
  [propName: string]: any
}

/**
 * 属于来源种类
 */
enum DataSource {
  Current = 'current',
  DefaultValue = 'defaultValue',
  Parent = 'parent',
  Null = 'null'
}

/**
 * 查找key返回的结构
 */
interface FindResult {
  /** 结果来源 */
  source: DataSource,
  /** 原始值 */
  sourceRefValue?: any,
  /** copy的原始值 */
  value?: any,
}

export default class DataArea implements DataInterface {
  _source: {
    [p: string]: {
      value: any,
      isParent: boolean
    }
  };
  _super: DataInterface;

  [propName: string]: any;

  constructor(data: object, _super: DataInterface) {
    this._super = _super
    this._source = {}
    /** 对象，存在自身数据，直接放入自己的数据域中去 */
    if (isObject(data) && Object.keys(data).length) {
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          this[key] = ref<any>(data[key as keyof typeof data])
          this._source[key] = {
            value: this[key], isParent: false
          }
        }
      }
    }
  }

  /**
   * 能够形成数据域的节点，根据子项增加新的节点
   */
  addKeyData(key: string, defaultValue: any): void {
    const result: FindResult = this.findKeyData(key)
    /** 查找数据域中的key */
    switch (result.source) {
      /** 来源于父集 */
      case DataSource.Parent:
        this[key] = result.value
        this._source[key] = {
          value: result.sourceRefValue, isParent: true
        }
        this.watchKeyData(key)
        break
      /** 数据域不存在 */
      case DataSource.Null:
        /** 默认值不存在，不会把该key加入到当前数据域中 */
        // if (isNull(defaultValue) || isUndefined(defaultValue) || (isString(defaultValue) && !defaultValue) || (isArray(defaultValue) && !defaultValue.length) || (isObject(defaultValue) && !Object.keys(defaultValue).length)) return
        if (isUndefined(defaultValue)) return
        /** 把默认值加入到数据域中 */
        this[key] = ref<any>(defaultValue)
        this._source[key] = {
          value: this[key], isParent: false
        }
    }
  }

  /**
   * 查找当前key所在的数据域
   */
  findKeyData(key: string): FindResult {
    /** 当前数据域存在该key */
    if (this.hasOwnProperty(key)) return { source: DataSource.Current, value: this[key], sourceRefValue: this[key] }
    /** 递归父集中查找 */
    if (this._super instanceof DataArea) {
      const result: FindResult = this._super.findKeyData(key)
      const value = result.value
      return {
        source: [DataSource.Current, DataSource.Parent].includes(result.source) ? DataSource.Parent : DataSource.Null,
        value: isRef(value) ? ref(value.value) : ref(value),
        sourceRefValue: value
      }
    }
    /** 不存在 */
    const value = ref<null>(null)
    return { source: DataSource.Null, value, sourceRefValue: value }
  }

  /**
   * 当父集中数据更新，子项需要跟着更新，监听关联值的变化
   */
  watchKeyData(key: string): void {
    const { value, isParent } = this._source[key]
    /** 父集继承而来进行数据监听 */
    if (isParent) {
      watch(value, (now, prev) => {
        this[key].value = cloneDeep(now)
      })
    }
  }

  /**
   * 数据域中不存在该key时，当组件的值发生变化时，调用该方法，会自动往该数据域中增加一个key
   * 同时需要更新子项的数据域取值，重新初始化一次
   */
  addCurDataKey(key: string, value: any): void {
    /** 数据域中已经存在该key，不操作 */
    if (this.hasOwnProperty(key)) return
    this[key] = isRef(value) ? value : ref<any>(value)
    this._source[key] = {
      value: this[key], isParent: false
    }
    /** todo 需要更新子集的作用域取值，同样key的_source下的isParent变成true */
  }

  /**
   * 获取数据域的值
   */
  getData(): object {
    const obj: { [propName: string]: any } = {}
    for (const key in this) {
      if (this.hasOwnProperty(key) && !isFunction(this[key]) && !['_super', '_source'].includes(key)) {
        obj[key as keyof typeof obj] = cloneDeep(this[key].value)
      }
    }
    return obj
  }
}
