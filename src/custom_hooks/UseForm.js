import { useState } from 'react'

const useForm = (valorInicial) => {
  const [input, setInput] = useState(valorInicial)

  const onChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    })
  }
  return [input, onChange]
}

export default useForm
