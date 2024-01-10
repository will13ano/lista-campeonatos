<template>
  <div>
    <h1 class="font-bold text-5xl">Todos os campeonatos</h1>
    <div v-if="!hasCampeonatos">
      Não tem campeonatos
    </div>
    <div v-else class="grid grid-cols-3 w-full gap-7 max-w-screen-lg mt-10">
      <CampeonatoItem v-for="campeonato in getCampeonatos" :key="campeonato.campeonato_id" :campeonato="campeonato" class="col-span-1" 
        @show="showCampeonato"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
  import { useRouter } from 'vue-router';
  import { storeToRefs } from 'pinia';
  import { useCampeonatoStore } from '@/stores/campeonato';

  import CampeonatoItem from './campeonato/CampeonatoItem.vue';

  const router = useRouter()
  const { fetchCampeonatos } = useCampeonatoStore()
  const { getCampeonatos, hasCampeonatos } = storeToRefs(useCampeonatoStore())


  if(!hasCampeonatos.value) fetchCampeonatos()

  const showCampeonato = (id: number) => {
    router.push({ name: 'detalhes-campeonato', params: { campeonatoId: id } })
  }
</script>