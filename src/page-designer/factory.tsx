import { renderChild } from './Root';

/**
 * 调用页面渲染器入口方法
 * @param schema json对象
 * @param props 初始化props
 * @return JSX.Element
 */
export function LtRender(schema: any = {}, props: any = {}): JSX.Element {
  return renderChild(schema, props)
}


