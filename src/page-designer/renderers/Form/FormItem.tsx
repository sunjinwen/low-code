import { defineComponent, PropType } from 'vue';
import { FormItemSchema } from '../../SchemaInterfaces/FormItemSchema';
import { DataInterface } from '../../DataArea'

export default defineComponent({
  name: 'FormItem',
  props: {
    config: {
      type: Object as PropType<FormItemSchema>
    },
    data: {
      type: Object as PropType<DataInterface>
    }
  },
  setup(props, ctx) {
    return () => {
      return (
        <div class="page-body">
          <div>这是FormItem</div>
        </div>
      )
    }
  }
})
