import { isArray, isObject } from './utils/utils'
import componentProvider from './componentProvider'
import DataArea from './DataArea'

/**
 * 渲染子节点
 */
export function renderChild(node: any, props: any): any {
  /** 数组循环渲染 */
  if (isArray(node)) {
    return node.map((node: any, index: any) => {
      return renderChild(node, props)
    });
  }

  /** node最终给的结构一定是对象 */
  if (!isObject(node)) return null

  /** todo 做事，包含On的属性进行操作 */

  /** 根据type获取组件 */
  const Component = componentProvider.get(node.type)
  if (!Component) return null

  let dataArea = null
  if (['Page', 'Form'].includes(node.type)) {
    dataArea = new DataArea(node.data, props.data)
  } else {
    props.data.addKeyData(node.name, node.value)
  }

  /** 进行schema渲染操作 */
  return (
    <Component config={ node } data={ dataArea ? dataArea : props.data }/>
  )
}
