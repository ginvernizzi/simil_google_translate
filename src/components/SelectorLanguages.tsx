import React from 'react'
import { Form } from 'react-bootstrap'

interface Props {
  lenguagesList: string[]
  language: string
  handleChangeLang: (lang: string) => void
}

const SelectorLanguages = ({ language, lenguagesList, handleChangeLang }: Props) => {
  const onHandleLenguageSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleChangeLang(e.target.value)
  }

  return (
    <Form>
      <Form.Select size='lg' onChange={(e) => { onHandleLenguageSelect(e) }} value={language} >
        {
          lenguagesList.map(l => <option key={l} value={l}>{l}</option>)
        }
      </Form.Select>
    </Form>
  )
}

export default SelectorLanguages
