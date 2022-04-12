<script setup lang="ts">
import { ref } from 'vue'

// defineProps<{ msg: string }>()

const props = defineProps({
  msg: {
    type: String,
    default: ''
  }
})

interface Param {
  a: String
}

const changeLog = ref(10)

const emit = defineEmits<{
  (event: 'changeLog', param: Param): void
}>()

emit('changeLog', { a: props.msg })

const count = ref(0)

const fn = () => {
  alert(111)
}

defineExpose({ changeLog, fn })
</script>

<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ props }}</h2>

    <p>
      Recommended IDE setup:
      <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
      +
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    </p>

    <p>
      See
      <code>README.md</code> for more information.
    </p>

    <p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Docs</a>
      |
      <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
    </p>

    <button type="button" @click="count++">count is: {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
