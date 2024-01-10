import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useLoadingStore = defineStore('loading', () => {
  const loadingStack = ref<boolean[]>([])

  const hasLoading = computed(() => loadingStack.value.length > 0)

  function initLoading() {
    loadingStack.value.push(true)
  }

  function removeLoading() {
    loadingStack.value.pop()
  }

  return { initLoading, removeLoading, hasLoading }
})
