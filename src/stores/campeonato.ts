import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { useLoadingStore } from './loading'
import useCampeonatoResource from '@/api/resources/campeonato'
import type { Campeonato, CampeonatoDetalhado } from '@/interface/campeonato'

export const useCampeonatoStore = defineStore('campeonato', () => {
  const campeonatos = ref<Campeonato[]>([])
  const campeonato = ref<CampeonatoDetalhado>()

  const hasCampeonatos = computed(() => campeonatos.value.length > 0)
  const hasCampeonato = computed(() => !!campeonato.value)

  const getCampeonatos = computed(() => campeonatos.value)
  const getCampeonato = computed(() => campeonato.value)
  
  async function fetchCampeonatos() {
    useLoadingStore().initLoading()

    campeonatos.value = await useCampeonatoResource.getCampeonatos()

    useLoadingStore().removeLoading()
  }

  function fetchCampeonato(campeonatoId: number) {
    useLoadingStore().initLoading()

    useCampeonatoResource.getCampeonato(campeonatoId).then((response) => {
      campeonato.value = response
    })
    .finally(() => useLoadingStore().removeLoading())
  }

  return {
    campeonato, campeonatos,
    hasCampeonatos, hasCampeonato,
    getCampeonatos, getCampeonato,
    fetchCampeonatos , fetchCampeonato
  }
})