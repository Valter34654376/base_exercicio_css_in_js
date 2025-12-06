import styled from 'styled-components'

// FormContainer herda props de <form>
export const FormContainer = styled.form.attrs({})<React.FormHTMLAttributes<HTMLFormElement>>`
  display: flex;
  gap: 8px;
  align-items: center;
`

// Input herda props de <input>
export const Input = styled.input.attrs({})<React.InputHTMLAttributes<HTMLInputElement>>`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
`

// Button herda props de <button>
export const Button = styled.button.attrs({})<React.ButtonHTMLAttributes<HTMLButtonElement>>`
  padding: 8px 14px;
  background: #2c7be5;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #1b63c7;
  }
`
