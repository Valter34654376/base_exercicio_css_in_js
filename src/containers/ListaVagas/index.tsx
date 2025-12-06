import React from 'react'
import { ListaContainer } from './styles'
import Vaga from '../../components/Vaga'

const ListaVagas: React.FC = () => {
  const vagas = [
    { titulo: 'Desenvolvedor Frontend', empresa: 'Empresa A' },
    { titulo: 'Desenvolvedor Backend', empresa: 'Empresa B' },
    { titulo: 'Fullstack Developer', empresa: 'Empresa C' }
  ]

  return (
    <ListaContainer>
      {vagas.map((vaga, index) => (
        <Vaga key={index} titulo={vaga.titulo} empresa={vaga.empresa} />
      ))}
    </ListaContainer>
  )
}

export default ListaVagas
