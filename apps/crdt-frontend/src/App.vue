<script setup lang="ts">
import { onMounted } from 'vue'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import templateComponent from './views/template/template'
import * as Y from 'yjs'
import { HocuspocusCloudProvider } from '@hocuspocus/provider'

// Connect it to the backend
const provider = new HocuspocusCloudProvider({
  url: 'ws://0.0.0.0:80',
  name: 'example-document',
  key: 'required-crdt-key',
})

// Define `tasks` as an Array
const tasks = provider.document.getArray('tasks')

// Listen for changes
tasks.observe(() => {
  console.log('tasks were modified')
})



onMounted(() => {
// Add a new task
  tasks.push(['buy milk'])
})
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <templateComponent />
  <HelloWorld msg="Vite + Vue Yeah Cool" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
