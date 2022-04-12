import { defineComponent, PropType } from 'vue';
import { FormSchema } from '../../SchemaInterfaces/FormSchema';
import { DataInterface } from '../../DataArea'
import { renderChild } from '../../Root';

export default defineComponent({
  name: 'Form',
  props: {
    config: {
      type: Object as PropType<FormSchema>
    },
    data: {
      type: Object as PropType<DataInterface>
    }
  },
  setup(props, ctx) {
    console.log('form: ', props)
    return () => {
      return (
        <div class="page-body">
          <div>这是form</div>
          {
            renderChild(props?.config?.body, { data: props.data })
          }
          <a-button type="primary" onClick={ (e: any) => console.log(props?.data?.getData()) }>这是Btn</a-button>
        </div>
      )
    }
  }
})
