<script lang="ts">
import PageDesigner from './pageDesigner'

export default {
  components: {PageDesigner},
  setup() {

  }
}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png"/>
  <br/>
  <PageDesigner/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.a {
  color: rebeccapurple;
}
.su {
  background-color: #2c3e50;
}
</style>
