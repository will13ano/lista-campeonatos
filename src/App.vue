<template>
  <main>
    <RouterView ></RouterView>
  </main>
  <LoadingComponentVue />
</template>

<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import LoadingComponentVue from './components/LoadingComponent.vue';
</script>