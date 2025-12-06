import React, { useState } from 'react'
import { FormContainer, Input, Button } from './styles'

const FormVagas: React.FC = () => {
  const [titulo, setTitulo] = useState('')
  const [empresa, setEmpresa] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ titulo, empresa })
    setTitulo('')
    setEmpresa('')
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Título da vaga"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Empresa"
        value={empresa}
        onChange={(e) => setEmpresa(e.target.value)}
      />
      <Button type="submit">Adicionar Vaga</Button>
    </FormContainer>
  )
}

export default FormVagas // 🔹 Este default export é essencial
