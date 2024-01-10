<template>
  <div class="w-full h-40 rounded-lg bg-slate-800 p-5 flex items-center cursor-pointer"
    @click="emits('show', campeonato.campeonato_id)"
  >
    <img :src="campeonato.logo" class="w-fit h-full">
    <div>
      <p> {{ campeonato.nome }} </p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Campeonato } from '@/interface/campeonato'

  defineProps<{
    campeonato: Campeonato
  }>()

  const emits = defineEmits(['show'])
</script>