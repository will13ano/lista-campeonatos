<template>
  <div class="mt-16 grid grid-cols-4">
    <div class="col-span-4 flex items-center">
      <img :src="campeonato?.logo" class="h-52 w-52" >
  
      <div class="ml-10">
        <h1 class="font-bold text-5xl">{{ campeonato?.nome }}</h1>
        <h1 class="font-bold text-2xl">{{ campeonato?.nome_popular }}</h1>

        <p>{{ campeonato?.tipo }}</p>
        {{ campeonato?.rodada_atual?.nome }} <p :class="{'text-red-600': campeonato?.rodada_atual?.status === 'encerrada'}">{{ campeonato?.rodada_atual?.status }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { CampeonatoDetalhado } from '@/interface/campeonato';

  defineProps<{
    campeonato?: CampeonatoDetalhado
  }>()

</script>