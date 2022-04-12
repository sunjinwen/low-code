import { LtRender } from './factory'
import * as components from './renderers'
import componentProvider from './componentProvider'
import { message } from 'ant-design-vue';

/** 注入所有组件 */
for (const name in components) {
  /** 组件 */
  const component = components[name as keyof typeof components]
  if (!component.name) {
    message.error('组件必须含有name属性，跟节点的type保持一致')
    continue
  }
  /** 注册 */
  componentProvider.add(component.name, component)
}

export default {
  install(app: any) {
  }
}

export {
  LtRender
}
