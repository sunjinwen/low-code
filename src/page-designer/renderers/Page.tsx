import { defineComponent, PropType, ref } from 'vue';
import { PageSchema } from '../SchemaInterfaces/PageSchema';
import { DataInterface } from '../DataArea'
import { renderChild } from '../Root';

export default defineComponent({
  name: 'Page',
  props: {
    config: {
      type: Object as PropType<PageSchema>
    },
    data: {
      type: Object as PropType<DataInterface>
    }
  },
  setup(props, ctx) {
    console.log('page-props: ', props, ctx)
    let a = ref(1)
    return () => {
      return (
        <div class="page-body">
          <div>这是page</div>
          {
            renderChild(props?.config?.body, { data: props.data })
          }
        </div>
      )
    }
  }
})
