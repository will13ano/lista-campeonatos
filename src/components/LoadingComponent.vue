<template>
  <div
    v-if="hasLoading"
    class="absolute top-0 left-0 w-screen h-screen bg-gray-500 bg-opacity-50 flex items-center justify-center">
    <LoadingIcon />
  </div>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import LoadingIcon from './icons/LoadingIcon.vue';
  import { useLoadingStore } from '@/stores/loading';

  const { hasLoading } = storeToRefs(useLoadingStore())
</script>