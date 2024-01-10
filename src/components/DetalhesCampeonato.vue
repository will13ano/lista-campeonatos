<template>
  <button class="absolute left-10 p-3 bg-slate-500 rounded-lg text-white"
    @click="goBack"
    >
    Voltar
  </button>
  <div v-if="hasCampeonato">
    <h1 class="font-bold text-5xl">Detalhes do campeonato</h1>
    <h1 class="font-bold text-2xl">{{ getCampeonato?.nome }}</h1>
    <CampeonatoDetalhado :campeonato="getCampeonato" />
  </div>
</template>

<script lang="ts" setup>
  import { storeToRefs } from 'pinia';
  import { useRouter } from 'vue-router';
  import { useCampeonatoStore } from '@/stores/campeonato';
  import CampeonatoDetalhado from './campeonato/CampeonatoDetalhado.vue';

  const { fetchCampeonato } = useCampeonatoStore()
  const { getCampeonato, hasCampeonato } = storeToRefs(useCampeonatoStore())

  const router = useRouter()

  const goBack = () => {
    router.push({ name: 'campeonatos' })
  }

  const props = defineProps<{
    campeonatoId: number
  }>()

  fetchCampeonato(props.campeonatoId)

</script>