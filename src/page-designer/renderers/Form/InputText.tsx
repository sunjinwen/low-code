import { defineComponent, PropType, ref } from 'vue';
import { InputTextSchema } from '../../SchemaInterfaces/InputTextSchema';
import { DataInterface } from '../../DataArea'

export default defineComponent({
  name: 'InputText',
  props: {
    config: {
      type: Object as PropType<InputTextSchema>
    },
    data: {
      type: Object as PropType<DataInterface>
    }
  },
  setup(props, ctx) {
    // console.log('inputText: ', props)
    let value = ref<any>(null)
    const name = props?.config?.name
    if (props?.data?.hasOwnProperty(name)) {
      value = props?.data[name]
    }

    function addNewKey(e: any) {
      const newValue = e.target.value
      value.value = newValue
      props?.data?.addCurDataKey(name, value)
    }

    console.log(11111, name, props.data)
    return () => {
      return (
        <div class="page-body">
          <div>这是inputText --- { props?.config?.label }</div>
          <a-input value={ value.value } onChange={ (e: any) => addNewKey(e) }></a-input>
        </div>
      )
    }
  }
})
