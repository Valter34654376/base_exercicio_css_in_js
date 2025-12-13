import { useState } from 'react'
import FormVagas from '../../components/FormVagas'
import Vaga from '../../components/Vaga'
import { Lista } from './styles'

type VagaType = {
  id: number
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const vagas: VagaType[] = [
  {
    id: 1,
    titulo: 'Desenvolvedor front-end',
    localizacao: 'remoto',
    nivel: 'junior',
    modalidade: 'clt',
    salarioMin: 3000,
    salarioMax: 4500,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 2,
    titulo: 'Desenvolvedor NodeJS',
    localizacao: 'remoto',
    nivel: 'pleno',
    modalidade: 'pj',
    salarioMin: 5000,
    salarioMax: 6500,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  }
  // Adicione as demais vagas aqui
]

const ListaVagas = () => {
  const [filtro, setFiltro] = useState('')

  const vagasFiltradas = vagas.filter((x) =>
    x.titulo.toLowerCase().includes(filtro)
  )

  return (
    <div>
      <FormVagas aoPesquisar={setFiltro} />
      <Lista>
        {vagasFiltradas.map((vag) => (
          <Vaga key={vag.id} {...vag} />
        ))}
      </Lista>
    </div>
  )
}

export default ListaVagas
