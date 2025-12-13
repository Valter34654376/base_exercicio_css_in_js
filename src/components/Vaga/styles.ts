import styled from 'styled-components'
import React from 'react'

export const VagaItem = styled.li`
  border: 1px solid var(--cor-principal);
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  padding: 16px;
  border-radius: 8px;
`

export const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const VagaLink = styled.a<React.AnchorHTMLAttributes<HTMLAnchorElement>>`
  display: inline-block;
  margin-top: 16px;
  padding: 8px 16px;
  background-color: var(--cor-principal);
  color: var(--cor-secundaria);
  text-decoration: none;
  border-radius: 8px;
`
