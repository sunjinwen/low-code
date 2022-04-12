/** 新增组件就在这里进行新增就可以了 */
import { Button, Radio, Checkbox } from "ant-design-vue";
const components = [Button, Radio, Checkbox];
export function setupAntd(app) {
    components.forEach((component) => {
        app.use(component);
    });
}
//# sourceMappingURL=antdv.js.map