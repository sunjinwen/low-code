import { defineComponent } from 'vue';
import { LtRender } from './page-designer'

const schema = {
  type: 'Page',
  data: {
    a: 10, b: 20, c: 30
  },
  body: {
    type: 'Form',
    body: [
      {
        type: 'InputText',
        label: '文本1',
        name: 'a',
        value: '111111'
      },
      {
        type: 'InputText',
        label: '文本2',
        name: 'inputText1',
        value: '范德萨范德萨发撒的'
      },
      {
        type: 'InputText',
        label: '文本3',
        name: 'inputText132232'
      },
      {
        type: 'Form',
        body: [
          {
            type: 'InputText',
            label: '文本121111112',
            name: 'a'
          },
          {
            type: 'InputText',
            label: '文本1212',
            name: 'inputText1'
          },
          {
            type: 'InputText',
            label: '第二层form的input',
            name: 'inputText132232',
            value: '这是默认值'
          },
          {
            type: 'Form',
            body: [
              {
                type: 'InputText',
                label: '文本1212',
                name: 'a',
                value: '111111'
              }
            ]
          }
        ]
      }
    ]
  }
}
export default defineComponent({
  name: 'pageDesigner',
  setup() {
    return () => {
      return LtRender(schema, {})
    }
  }
})
