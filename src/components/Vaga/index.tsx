import React from 'react';
import { VagaCard, VagaTitulo, VagaEmpresa } from './styles';

interface VagaProps {
  titulo: string;
  empresa: string;
}

const Vaga: React.FC<VagaProps> = ({ titulo, empresa }) => (
  <VagaCard>
    <VagaTitulo>{titulo}</VagaTitulo>
    <VagaEmpresa>{empresa}</VagaEmpresa>
  </VagaCard>
);

export default Vaga;
