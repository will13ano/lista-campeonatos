export interface Campeonato {
  campeonato_id: number
  nome: string
  slug: string
  nome_popular: string
  edicao_atual: Edicao
  fase_atual: FaseAtual
  rodada_atual: any
  status: string
  tipo: string
  logo: string
  regiao: string
  _link: string
}


export interface FaseAtual {
  fase_id: number
  nome: string
  slug: string
  tipo: string
  _link: string
}

export interface CampeonatoDetalhado {
  campeonato_id: number
  nome: string
  slug: string
  nome_popular: string
  edicao_atual: Edicao
  fase_atual: FaseAtual
  rodada_atual: RodadaAtual
  status: string
  tipo: string
  logo: string
  regiao: string
  fases: Fase[]
}


export interface RodadaAtual {
  nome: string
  slug: string
  rodada: number
  status: string
}

export interface Fase {
  fase_id: number
  edicao: Edicao
  nome: string
  slug: string
  status: string
  decisivo: boolean
  eliminatorio: boolean
  ida_e_volta: boolean
  tipo: string
  grupos: any[]
  chaves: any[]
  rodadas: any[]
  proxima_fase: any
  fase_anterior: any
  _link: string
}

export interface Edicao {
  edicao_id: number
  temporada: string
  nome: string
  nome_popular: string
  slug: string
}
