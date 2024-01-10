import ApiService from "../api.service";

const useCampeonatoResource = {
  getCampeonatos: () => ApiService.get('/v1/campeonatos'),
  getCampeonato: (campeonatoId: number) => ApiService.get(`v1/campeonatos/${campeonatoId}`),
}

export default useCampeonatoResource